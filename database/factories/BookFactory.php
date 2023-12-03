<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'title' => $this->faker->sentence(),
      'author' => $this->faker->name(),
      'description' => $this->faker->paragraph(),
      'genres' => $this->faker->word(),
      'cover' => $this->faker->imageUrl(),
      'user_id' => User::factory(),
    ];
  }

  // /**
  //  * Configure the model factory.
  //  * 
  //  * @return $this
  //  */
  // public function configure(): static
  // {
  //   return $this->afterCreating(function (Book $book) {
  //     $book->chapters()->saveMany(ChapterFactory::new()->count(3)->make());
  //   });
  // }
}
