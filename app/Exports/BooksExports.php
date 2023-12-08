<?php

namespace App\Exports;

use App\Models\Book;
use Maatwebsite\Excel\Concerns\FromCollection;

class BooksExports implements FromCollection
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Book::select('user_id', 'title', 'author', 'cover', 'description', 'genres')->get();
    }

    public function headings(): array
    {
        return [
            'user_id',
            'title',
            'author',
            'cover',
            'description',
            'genres'
        ];
    }
}
