<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Issues;
use App\Models\User;

class Reply extends Model
{
    protected $fillable = [
        'issue_id',
        'user_id',
        'content',
    ];
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
   

    public function issue()
    {
        return $this->belongsTo(Issues::class, 'issue_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class , 'user_id');
    }
    
   
}
