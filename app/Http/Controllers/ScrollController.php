<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;


class ScrollController extends Controller
{
    //
    public function index(){

        $shopId = Auth::user()->name;
        return Inertia::render("index", ["shopId" => $shopId]);
    }
}
