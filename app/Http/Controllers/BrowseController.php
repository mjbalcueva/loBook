<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrowseController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $books = Book::with('chapters')->get();

    // return Inertia::render('Uploads', [
    //   'books' => $books,
    // ]);
    return Inertia::render('Browse', [
      'laravelVersion' => Application::VERSION,
      'phpVersion' => PHP_VERSION,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Book $book)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Book $book)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Book $book)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Book $book)
  {
    //
  }
}
