<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp\Client;
use Carbon\Carbon;

use App\User;
use App\FavoriteMovie;

class MovieController extends Controller
{
    public function index(Request $request)
    {
        return view('pages.movies');
    }

    public function show($id)
    {
        return view('pages.detail', ['id' => $id]);
    }

    public function list(Request $request)
    {
        $client = new Client();
        $query =[
            'apikey' => env('API_KEY_OMDB', 'cf812f78'),
            's'      => $request->title,
        ];
        if($request->type != ""){
            $query['type'] = $request->type;
        }
        if($request->year != ""){
            $query['y'] = $request->year;
        }
        if($request->page !== ""){
            $query['page'] = $request->page;
        }
        $request = $client->request('GET', env('API_URL_OMDB', 'https://www.omdbapi.com/'), [
            'query' => $query
        ]);
        $response=json_decode($request->getBody());
        $data    =[
            'data'    => [],
            'message' => __('lang.movie_notfound')
        ];
        if($response->Response == "True"){
            for($i=0; $i < count($response->Search); $i++){
                $newData = [
                    'imdbID'   => $response->Search[$i]->imdbID,
                    'title'    => $response->Search[$i]->Title,
                    'year'     => $response->Search[$i]->Year,
                    'poster'   => '<img data-src="'.$response->Search[$i]->Poster.'" class="lozad fade">',
                    'favorite' => FavoriteMovie::where('user_id', session('user_id'))->where('imdb_id', $response->Search[$i]->imdbID)->where('flag', 1)->first(),
                ];
                array_push($data['data'], $newData);
            }
            $data['message']=__('lang.movie_found');
        }
        return response()->json($data);
    }

    public function detail($id, $jsonNeeded = false)
    {
        $client=new Client();
        $query =[
            'apikey' => env('API_KEY_OMDB', 'cf812f78'),
            'i'      => $id
        ];
        $request = $client->request('GET', env('API_URL_OMDB', 'https://www.omdbapi.com/'), [
            'query' => $query
        ]);
        $response=$request->getBody();
        $data    =json_decode($response);

        if($jsonNeeded == false){
            if($data->Response == "True"){
                $data->favorite=FavoriteMovie::where('user_id', session('user_id'))->where('imdb_id', $data->imdbID)->where('flag', 1)->first();
                return response()->json([
                    'data'    => $data,
                    'message' => __('lang.movie_found')
                ]);

            }else{
                return response()->json([
                    'data'    => [],
                    'message' => __('lang.movie_notfound')
                ]);
            }
        }else{
            return $response;
        }
    }

    public function storeFavorite(Request $request)
    {
        $imdb_id = $request->imdb_id;

        $token = str_replace('Bearer ','', $request->header('Authorization'));
        $user =User::where('token', $token);

        if($user->count() > 0){

            $user      = $user->first();
            $filterFav = FavoriteMovie::where('imdb_id', $imdb_id)->where('user_id', $user->id);
            
            if($filterFav->count() > 0){
                
                $filterFav->update(['flag' => 1]);

                $statusCode = 200;
                $message    = $filterFav->first()['title']. __("lang.has_been_add");

            } else {

                $data=json_decode($this->detail($imdb_id, true));
            
                if($data->Response == "True"){
                    $insert = [
                        'imdb_id'    => $imdb_id,
                        'user_id'    => $user->id,
                        'title'      => $data->Title,
                        'plot'       => $data->Plot,
                        'poster'     => $data->Poster,
                        'year'       => $data->Year,
                        'rating'     => $data->imdbRating,
                        'length'     => $data->Runtime,
                        'released'   => $data->Released,
                        'genre'      => $data->Genre,
                        'director'   => $data->Director,
                        'writer'     => $data->Writer,
                        'actor'      => $data->Actors,
                        'flag'       => 1,
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now()
                    ];
                    FavoriteMovie::insert($insert);

                    $statusCode = 200;
                    $message    = $data->Title. __("lang.has_been_add");

                } else {
                    $statusCode = 404;
                    $message   = __("lang.movie_notfound");
                }
            }  

        } else {
            $statusCode = 403;
            $message    = __("lang.user_found");
        }
        return response()->json([
            'message' => $message
        ], $statusCode);
    }

    public function getAllFavorite()
    {
        return view('pages.favorite');
    }

    public function listFavorite()
    {
        $data = FavoriteMovie::where('user_id', session('user_id'))->where('flag', 1)->paginate(8);
        if(!$data->isEmpty()){
            return response()->json([
                'message' => __("lang.movie_found"),
                'data'    => $data,
            ], 200);
        } else {
            return response()->json([
                'message' => __("lang.movie_notfound"),
                'data'    => [],
            ], 404);
        }
    }

    public function detailFavorite($id)
    {
        $data = FavoriteMovie::where('user_id', session('user_id'))->where('imdb_id', $id)->first();
        if($data){
            return response()->json([
                'message' => __("lang.movie_found"),
                'data'    => $data,
            ], 200);
        } else {
            return response()->json([
                'message' => __("lang.movie_notfound"),
                'data'    => [],
            ], 404);
        }
    }

    public function deleteFavorite($id)
    {
        $data = FavoriteMovie::where('imdb_id', $id)->where('user_id', session('user_id'));

        if($data->count() > 0){
            $data->update(['flag' => 0]);
            return response()->json([
                'message' => __("lang.favorite_deleted")
            ]);
        }else{
            return response()->json([
                'message' => __("lang.favorite_failed_deleted")
            ]);
        }
    }
}
