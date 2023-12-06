<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('etlnews', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id');
            $table->string('title');
            $table->string('author');
            $table->string('cover');
            $table->string('description');
            $table->string('genres');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('etlnews');
    }
};
