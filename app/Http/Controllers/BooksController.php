<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Books;

class BooksController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $book = Books::orderBy('created_at')->get();

        return Inertia::render('Uploads', compact('book'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Uploads.add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Books::create($request->all());
        
        return Inertia::render('Uploads')->with('success', 'Book added successfully');    
    }
}
