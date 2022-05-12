<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $fillable = ['title', 'release_dt', 'synopsis', 'genre_id', 'poster_path', 'director_id'];
    use HasFactory;
}
