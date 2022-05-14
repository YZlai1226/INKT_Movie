<?php

use App\Http\Controllers\MovieController;
use App\Http\Controllers\AdminMovieController;
use App\Http\Controllers\GradeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\GenreController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/users', function() {
    return response()->json(User::all());
});
// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/genres', [GenreController::class, 'getGenres']);

Route::apiResource('admin/movies', AdminMovieController::class);
Route::apiResource('movies', MovieController::class);
Route::apiResource('admin/grades', GradeController::class);
Route::apiResource('admin/directors', DirectorController::class);
Route::apiResource('admin/favorites', FavoriteController::class);
Route::apiResource('admin/comments', CommentController::class);
