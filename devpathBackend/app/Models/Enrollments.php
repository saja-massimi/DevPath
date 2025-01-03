<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Courses;

class Enrollments extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'course_id',
        'status',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function course()
    {
        return $this->belongsTo(Courses::class, 'course_id');
    }
}
