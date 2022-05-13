<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function getGenres() {
        $TMDBgenres = get_object_vars(json_decode(file_get_contents('https://api.themoviedb.org/3/genre/movie/list?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US')));
        return response()->json($TMDBgenres);
    }
}
