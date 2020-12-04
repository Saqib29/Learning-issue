<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\DemoController;


Route::group(['prefix'=>'account'], function(){

    Route::get('/profile', function(){
        return "Profile";
    });

    Route::get('/logout', function(){
        return "Logout";
    });

    Route::get('/signup', function(){
        return 'Sungup';
    });

    Route::get('updateprofile', function(){
        return 'Update Profile';
    });
});




// Route::get('/Name/{firstName}/{middleName}/{lastName}', [DemoController::class, 'MyName']);

// Route::get('/name', 'App\Http\Controllers\DemoController@MyName');

// Route::get('/', [SiteController::class, 'Home']);

// Route::get('/about', [SiteController::class, 'About']);

// Route::get('/contact', [SiteController::class, 'Contact']);