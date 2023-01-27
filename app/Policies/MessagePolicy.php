<?php

namespace App\Policies;

use App\Models\Message;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MessagePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return true;
    }

    public function view(User $user, Message $message)
    {
        return true;
    }

    public function create(User $user)
    {
        return false;
    }

    public function update(User $user, Message $message)
    {
        return false;
    }

    public function delete(User $user, Message $message)
    {
        return false;
    }

    public function restore(User $user, Message $message)
    {
        return false;
    }

    public function forceDelete(User $user, Message $message)
    {
        return false;
    }
}
