<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;

class Message extends Resource
{
    public static $model = \App\Models\Message::class;

    public static $title = 'subject';

    public static $search = [
        'id', 'message_id', 'from', 'to'
    ];

    public function fields(NovaRequest $request)
    {
        return [
            ID::make()->sortable(),

            Text::make('Message ID', 'message_id')
                ->onlyOnDetail(),

            Text::make('From', 'from')
                ->filterable(),

            Text::make('To', 'to')
                ->filterable(),

            Text::make('Subject', 'subject'),

            Textarea::make('HTML', 'html')
                ->onlyOnDetail(),

            DateTime::make('Created At', 'created_at')
                ->sortable(),
        ];
    }

    public function cards(NovaRequest $request)
    {
        return [
            \App\Nova\Metrics\MessagesPerDay::make(),
        ];
    }

    public function filters(NovaRequest $request)
    {
        return [];
    }

    public function lenses(NovaRequest $request)
    {
        return [];
    }

    public function actions(NovaRequest $request)
    {
        return [];
    }
}
