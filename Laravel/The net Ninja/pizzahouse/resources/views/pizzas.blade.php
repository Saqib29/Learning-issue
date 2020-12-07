@extends('layouts.layout')

@section('content')
<div class="flex-center position-ref full-height">
    
    <div class="content">
        <div class="title m-b-md">
            Pizzas List
        </div>
        
            <p> {{ $name }} </p>
            <p> {{ $age }} </p>
        
        <!-- @for($i=0; $i < 5; $i++)
            <p>value of i is {{ $i }}</p>
        @endfor  -->

        <!-- @for($i = 0; $i < count($pizzas); $i++)
            <p>{{ $pizzas[$i]['type'] }}</p>
        @endfor -->

        @foreach($pizzas as $pizza)
            <div>
                {{ $loop->index }} {{ $pizza['type'] }} - {{ $pizza['base'] }}
                @if($loop->first)
                    <span>- first in loop</span>
                @endif
                @if($loop->last)
                    <span>- last in loop</span>
                @endif
            </div>
        @endforeach

    </div>
</div>
@endsection