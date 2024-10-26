<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Eloquent\SoftDeletes;

class CreateFavoriteMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('favorite_movies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('imdb_id');
            $table->integer('user_id');
            $table->string('title');
            $table->string('poster');
            $table->string('year');
            $table->string('plot');
            $table->integer('rating');
            $table->string('length');
            $table->string('released');
            $table->string('genre');
            $table->string('director');
            $table->string('writer');
            $table->string('actor');
            $table->integer('flag');
            $table->softDeletes();
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
        Schema::dropIfExists('favorite_movies');
    }
}
