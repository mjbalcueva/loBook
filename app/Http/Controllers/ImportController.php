<?php

namespace App\Http\Controllers;

use App\Imports\BookImport;
use Illuminate\Http\Request;
use App\Exports\BooksExports;
use App\Models\Book;
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
      $csvFile = fopen($csv->getRealPath(), "r");
        $firstLine = true;
        while(($data = fgetcsv($csvFile, 2000, ",")) !== FALSE)
        {
            if(!$firstLine)
            {
                Book::create([
                    'user_id' => $data['0'],
                    'title' => $data['1'],
                    'author' => $data['2'],
                    'cover' => $data['3'],
                    'description' => $data['4'],
                    'genres' => $data['5']

                ]);
            }
            $firstLine = false;
        }
        fclose($csvFile);
      dd($contents);
    }
  }
}
