<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->char('title',);
            $table->date('release_dt');
            $table->char('synopsis', 500);
            $table->integer('genre_id');
            $table->char('poster_path', 250);
            $table->unsignedBigInteger('director_id');
            /* $table->foreign('director_id')->references('id')->on('directors')->onDelete('cascade'); */
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
};
