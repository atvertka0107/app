"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

let lastFilm = prompt("Последний просмотренный фильм?", "Гарри Потер и принц полукровка");
let markOfFilm = +prompt("Оцените его от 1 до 10","");

personalMovieDB.movies[lastFilm] = markOfFilm;

console.log(personalMovieDB);