<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use Illuminate\Support\Facades\DB;

class AdminMovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $OURmovies = Movie::all();
        $ctvOUR = json_decode($OURmovies);

        return response()->json($OURmovies);
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
