<?php

use App\Providers\RouteServiceProvider;

test('registration screen can be rendered', function () {
  $response = $this->get('/signup');

  $response->assertStatus(200);
});

test('new users can signup', function () {
  $response = $this->post('/signup', [
    'name' => 'Test User',
    'email' => 'test@example.com',
    'password' => 'password',
    'password_confirmation' => 'password',
  ]);

  $this->assertAuthenticated();
  $response->assertRedirect(RouteServiceProvider::HOME);
});
