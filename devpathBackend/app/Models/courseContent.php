<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class courseContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_id',
        'title',
        'description',
        'video_url',
        'file_url',
        'type',
        'duration',
    ];

    public function section()
    {
        return $this->belongsTo(Section::class, 'section_id');
    }

    public function course()
    {
        return $this->belongsTo(Courses::class);
    }
}
