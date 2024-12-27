<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use HasFactory;
    use SoftDeletes;



    protected $casts = [
        'created_at' => 'datetime',
    ];
    protected $fillable = [
        'user_id',
        'course_id',
        'amount',
        'type',
        'payment_status',
        'stripe_payment_intent_id',
    ];
    protected $primaryKey = 'transaction_id';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Courses::class);
    }
}
