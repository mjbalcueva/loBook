<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Chapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChapterController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('Upload/{book}/create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $requestChapter = $request->all();
    $requestChapter['book_id'] = Auth::book()->id;
    Chapter::create($requestChapter);
    
    return redirect();
  }

  /**
   * Display the specified resource.
   */
  public function show(Book $book, Chapter $chapter)
  {
    return Inertia::render('Chapter/Show', [
      'chapterData' => $chapter,
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Book $book, Chapter $chapter)
  {
    return Inertia::render('Chapter/Edit', [
      'chapterData' => $chapter,
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Book $book, Chapter $chapter)
  {
    $chapter->update($request->all());

    return redirect()->route('uploads.edit')->with('success', 'Chapter updated successfully');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Request $request, Book $book, Chapter $chapter)
  {
    $request = Chapter::findOrFail($chapter->id);
    $request->delete();

    return redirect()->route('upload.edit')->with('success', 'Chapter deleted successfully');
  }
}
