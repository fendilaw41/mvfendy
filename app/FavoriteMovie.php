<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FavoriteMovie extends Model
{
    use SoftDeletes;
}
