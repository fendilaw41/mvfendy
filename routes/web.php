<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('Language')->group(function(){

    Route::get('/', 'AuthController@pageLogin');
    Route::post('/api/login', 'AuthController@postLogin');

    Route::middleware(['api.auth'])->group(function(){

        Route::get('/movies', 'MovieController@index');
        Route::get('/movies/show/{id}', 'MovieController@show');
        Route::get('/movies/favorite-list', 'MovieController@getAllFavorite');
       
        Route::get('/logout', 'AuthController@logout');

    });

    Route::prefix('api')->middleware('JWTMiddleware')->group(function(){
        
        Route::get('/movies/favorite', 'MovieController@listFavorite');
        Route::get('/movies/favorite/{id}', 'MovieController@detailFavorite');
        Route::post('/movies/add', 'MovieController@storeFavorite');
        Route::post('/movies/delete-favorite/{id}', 'MovieController@deleteFavorite');
        
        Route::post('/movies/list', 'MovieController@list');
        Route::post('/movies/{id}', 'MovieController@detail');
    });

});

Route::get('/language/{langcode}', 'AuthController@changeLanguage');