<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Cart extends Model
{
    use HasFactory;

    protected $table = 'cart';
    protected $fillable = ['user_id', 'course_id'];
    protected $primaryKey = 'cart_id';

    public function course()
    {
        return $this->belongsTo(Courses::class, 'course_id', 'course_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
