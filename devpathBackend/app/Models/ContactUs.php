<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContactUs extends Model
{
    use HasFactory;
    use SoftDeletes;


    protected $primaryKey = 'contactUs_id';


    protected $fillable = [
        'name',
        'email',
        'message',
        'is_read',
        'subject'
    ];
}
