<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use Illuminate\Support\Facades\DB;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $TMDBmovies2022 = get_object_vars(json_decode(file_get_contents('https://api.themoviedb.org/3/discover/movie?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US&sort_by=popularity.desc&year=2022')));
        $TMDBmovies2021 = get_object_vars(json_decode(file_get_contents('https://api.themoviedb.org/3/discover/movie?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US&sort_by=popularity.desc&year=2021')));
        $TMDBmovies2020 = get_object_vars(json_decode(file_get_contents('https://api.themoviedb.org/3/discover/movie?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US&sort_by=popularity.desc&year=2020')));
        $TMDBmovies2019 = get_object_vars(json_decode(file_get_contents('https://api.themoviedb.org/3/discover/movie?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US&sort_by=popularity.desc&year=2019')));
        $TMDBmovies2018 = get_object_vars(json_decode(file_get_contents('https://api.themoviedb.org/3/discover/movie?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US&sort_by=popularity.desc&year=2018')));
        // var_dump('TMDBmovies is :', $TMDBmovies);
        $ctv2022 = $TMDBmovies2022['results'];
        $ctv2021 = $TMDBmovies2021['results'];
        $ctv2020 = $TMDBmovies2020['results'];
        $ctv2019 = $TMDBmovies2019['results'];
        $ctv2018 = $TMDBmovies2018['results'];
        // var_dump('ctv is: ', $ctv);
        $OURmovies = Movie::whereYear('release_dt', '=', date('2022'))
        ->get();
        $ctvOUR = json_decode($OURmovies);
        // var_dump('ctvOUR is: ', $ctvOUR);

        $allMovies = array_merge($ctv2022, $ctv2021, $ctv2020, $ctv2019, $ctv2018, $ctvOUR);

        return response()->json($allMovies);
    }

        public function sortByYear (Request $request, $year)
        {
            $TMDBmovieYear = get_object_vars(json_decode(file_get_contents('https://api.themoviedb.org/3/discover/movie?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US&sort_by=popularity.desc&year=' + $year)));
        }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $movie = new Movie;

        $movie->title = $request->title;
        $movie->release_date = $request->release_dt;
        $movie->overview = $request->synopsis;
        $movie->genre_ids = $request->genre_id;
        $movie->poster_path = $request->poster_path;
        $movie->director_id = $request->director_id;
        
        $movie->save();

        return response()->json($movie, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {
        return response()->json($movie, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie)
    {
        $movie->update($request->all());
        $movie->save();

        return response()->json($movie, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
     $movie->delete();
     return response()->json($movie, 201);
    }
}
