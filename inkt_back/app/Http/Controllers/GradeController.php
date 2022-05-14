<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Grade;

class GradeController extends Controller
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
        $OURmovies = Movie::all()
        ->get();
        $ctvOUR = json_decode($OURmovies);
        // var_dump('ctvOUR is: ', $ctvOUR);

        $allMovies = array_merge($ctv2022, $ctv2021, $ctv2020, $ctv2019, $ctv2018, $ctvOUR);

        return response()->json($allMovies);
        }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $grade = new Movie;

        $grade->user_id = $request->user_id;
        $grade->movie_id = $request->movie_id;
        $grade->grade = $request->grade;
        
        $grade->save();

        return response()->json($grade, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Grade $grade)
    {
        return response()->json($grade);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Grade $grade)
    {
        $grade->update($request->all());
        $grade->save();

        return response()->json($grade, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $movie->delete();
        return response()->json($movie, 201);
    }
}
