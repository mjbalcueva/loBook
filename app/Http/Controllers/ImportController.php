<?php

namespace App\Http\Controllers;

use App\Imports\BookImport;
use Illuminate\Http\Request;
use App\Exports\BooksExports;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ImportController extends Controller
{
  public function create()
  {
    return Inertia::render('Import');
  }

  public function store(Request $request)
  {
    $csv = $request->file('csv');

    if ($csv) {
      $contents = file_get_contents($csv->getRealPath());

      dd($contents);
    }
  }
}
