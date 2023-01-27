<?php

namespace App\Nova\Metrics;

use App\Models\Message;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Trend;

class MessagesPerDay extends Trend
{
    public function calculate(NovaRequest $request)
    {
        return $this->countByDays($request, Message::class);
    }

    public function ranges()
    {
        return [
            7 => __('7 Days'),
            14 => __('14 Days'),
            30 => __('30 Days'),
        ];
    }

    public function cacheFor()
    {
        // return now()->addMinutes(5);
    }

    public function uriKey()
    {
        return 'messages-per-day';
    }
}
