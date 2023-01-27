<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'message_id',
        'from',
        'to',
        'spam_verdict',
        'virus_verdict',
        'subject',
        'html',
    ];
}
