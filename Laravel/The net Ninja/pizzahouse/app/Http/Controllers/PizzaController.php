<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pizza;

class PizzaController extends Controller
{
    public function index(){

        // $pizzas = Pizza::all();
        // $pizzas = Pizza::orderBy('name', 'desc')->get();
        // $pizzas = Pizza::where('type', 'hawaiian')->get();
        $pizzas = Pizza::latest()->get();
        
        return view('pizzas.index', [
            'pizzas' => $pizzas,
        ]);
    }

    public function show($id){

        $pizza = Pizza::findOrFail($id);

        return view('pizzas.show', ['pizza' => $pizza]);
    }

    public function create(){
        return view('pizzas.create');
    }

    public function store(){

        // error_log(request('name'));
        // error_log(request('type'));
        // error_log(request('base'));

        $pizza = new Pizza();

        $pizza->name = request('name');
        $pizza->type = request('type');
        $pizza->base = request('base');
        $pizza->toppings = request('toppings');

        // error_log(request('toppings'));
        $pizza->save();

        // return request('toppings');
        return redirect('/')->with('msg', 'Thanks for your order');
    }
}
