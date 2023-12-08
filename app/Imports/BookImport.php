<?php

namespace App\Imports;

use App\Models\Book;
use App\Models\Chapter;
use Maatwebsite\Excel\Concerns\ToModel;

class BookImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Book([
            'title' => $row['title'],
            'author' => $row['author'],
            'cover' => $row['cover'],
            'description' => $row['description'],
            'genres' => $row['genres'],
            'user_id' => $row['user_id'],
        ]);

        return new Chapter([
            'title' => $row['title'],
            'content' => $row['content'],
            'book_id' => $row['book_id'],
        ]);
    }
}
