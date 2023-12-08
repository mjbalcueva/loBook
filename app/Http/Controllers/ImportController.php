<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

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
