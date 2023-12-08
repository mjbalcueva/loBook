<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ImportController extends Controller
{
    public function create() {
        return Inertia::render('Import');
    }

    public function store(Request $request) {
        
    }
}
