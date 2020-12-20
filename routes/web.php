<?php

use Illuminate\Support\Facades\Route;

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

Auth::routes([
    'register' => false,
]);

Route::get('/', [App\Http\Controllers\Site\SiteController::class, 'index'])->name('site.index');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/changelog', [App\Http\Controllers\Site\SiteController::class, 'changelog'])->name('site.changelog');

Route::get('/groundschool', [App\Http\Controllers\Site\SiteController::class, 'groundschool'])->name('site.groundschool');

Route::get('/resources', [App\Http\Controllers\Site\SiteController::class, 'resources'])->name('site.resources');

Route::get('/documentation', [App\Http\Controllers\Site\SiteController::class, 'documentation'])->name('site.documentation');