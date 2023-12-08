<?php

namespace App\Http\Controllers;

use App\Imports\BookImport;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ImportController extends Controller
{
    public function create() {
        return Inertia::render('Import');
    }

    public function import(Request $request) {
        Excel::import(new BookImport, $request->file('file')->store('temp'));
        return redirect()->route('import')->with('success', 'Book is imported successfully.');
    }
    
}
