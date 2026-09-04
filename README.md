# Development Platforms Assignment

This project is an article platform built with HTML, CSS, Javascipt and Supabase

users can register an account, confirm their email, log in, see articles and publish articles when logged in.

## Features

- User registration with email confirmation
- Login and Logout
- Public article browsing
- Article submission for logged in users
- Supabase authentication and database
- Row Level Security
- Responsive design

## Technologies

- HTML
- CSS
- Javascript
- Supabase
- Netlify

## Supabase Configuration

Supabase is used for authentication and database storage.

The Supabase client is configured in `js/supabase.js` using the project URL and public anon key.

`articles` table has:

- id
- created_at
- title
- body
- category
- submitted_by

Articles can be seen publicly, and only authenticated users can create articles. This is done with Row Level Security.

## Live Website

