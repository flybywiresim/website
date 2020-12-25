<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Site\SiteController;

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

Route::group(['middleware' => 'guest', 'namespace' => 'Site', 'as' => 'site.'], function(){
    Route::get('/', [SiteController::class, 'index'])->name('index');
    Route::get('changelog', [SiteController::class, 'changelog'])->name('changelog');
    Route::get('groundschool', [SiteController::class, 'groundschool'])->name('groundschool');
    Route::get('resources', [SiteController::class, 'resources'])->name('resources');
    Route::get('documentation', [SiteController::class, 'documentation'])->name('documentation');
});

require __DIR__.'/auth.php';
