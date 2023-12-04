<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Chapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UploadController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $bookData = Book::where('user_id', auth()->user()->id)->with('chapters')->paginate(10);

    return Inertia::render('Upload/Index', [
      'bookData' => $bookData,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('Upload/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {

    $requestBook = $request->all();
    $requestBook['user_id'] = Auth::user()->id;

    $book = Book::create($requestBook);

    if (isset($requestBook['chapters'])) {
      foreach ($requestBook['chapters'] as $chapter) {
        $chapter['user_id'] = Auth::user()->id;
        $book->chapters()->create($chapter);
      }
    }

    return redirect()->route('uploads.index')->with('success', 'Book created successfully.');
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    $book = Book::findOrFail($id);

    dd($book);
    return view('upload.edit', compact('book'));
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    $book = Book::findOrFail($id);
    $book->update($request->all());

    return redirect()->route('upload.index')->with('success', 'Book updated successfully');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $book = Book::findOrFail($id);
    $book->delete();

    return redirect()->route('upload.index')->with('success', 'Book deleted successfully');
  }
}
