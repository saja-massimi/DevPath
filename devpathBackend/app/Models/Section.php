<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;
    protected $fillable = ['course_id', 'title', 'description'];

    public function content()
    {
        return $this->hasMany(courseContent::class, 'section_id');
    }

    public function course()
    {
        return $this->belongsTo(Courses::class);
    }
}
