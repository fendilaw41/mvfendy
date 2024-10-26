<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

use Exception;

class AuthController extends Controller
{
    public function pageLogin()
    {
        return view('auth.login');
    }

    public function postLogin(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'username' => 'required',
            'password' => 'required|string'
        ]);
       
        if($validator->fails()){
            return response()->json([
                'message' => __("lang.invalid_login")
            ], 401);

        }else{
            $user           = new User();
            $credentials    = $request->only('username', 'password');
            $token          = JWTAuth::attempt($credentials);
            $update['token']= $token;
            try {
                if (!$token = JWTAuth::attempt($credentials)) {
                    return response()->json([
                        'message' => __("lang.invalid_login")
                    ], 401);
                }else{
                    $username = $request->username;
                    $dataUser = $user->where('username', 'like', '%'.$username.'%')->first();

                    $request->session()->regenerate();
                    
                    $dataUser->where('username', $username)->update($update);
                    
                    session(['access_token' => $update['token']]);
                    session(['user_id' => $dataUser->id]);
                    session(['is_login' => 1]);

                    return response()->json([
                        'username' => $username,
                        'is_login' => 1,
                        'token'    => $update['token'],
                    ], 200);
                }
            } catch (JWTException $e) {
                return response()->json([
                    'message' => __("lang.invalid_login"),
                    'data'    => $e->getMessages()
                ], 401);
            }
        }
    }

    public function logout()
    {
        if(session()->has('is_login')){
            $getToken=User::where('id', session('id_user'))->first();
            try {
                JWTAuth::manager()->invalidate(new \Tymon\JWTAuth\Token($getToken->token), $forceForever = false);
            } catch (Exception $e) {
                //null
            }
            User::where('id', session('id_user'))->update([
                'token' => null
            ]);
            session()->flush();
            return redirect('/');
        }else{
            return redirect()->to(url(''));
        }
    }

    public function changeLanguage($langCode)
    {
        App::setLocale($langCode);
        session(['lang_code' => $langCode]);
        return redirect()->back();
    }
}
