"use strict";

let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let loveFilm = mostLoveFilm();

rememberMyFilms();
writeYourGenres();
showMyDB();


function mostLoveFilm() {
    let str = "";
    while (str == "" || str == null || str.length > 50) {
        str = prompt("Название любимого фильма...", "");
    }
    return str;
}

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже успели посмотреть?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже успели посмотреть?", "");
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите последний просмотренный фильм", "");
        while (a == "" || a == null || a.length > 50) {
            alert("Вы обязаны ввести название фильма");
            a = prompt("Введите название фильма", "");
        }
        let b = +prompt("Оцените фильм от 0 до 10", "");
        while (b == "" || b == null || isNaN(b) || b < 0 || b > 10) {
            alert("Введите число");
            b = +prompt("Оцените фильм от 0 до 10", "");
        }
        personalMovieDB.movies[a] = b;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("вы киноман");
    } else {
        console.log("error");
    }
}

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`, "");
        while (a == "" || a == null || a.length > 50) {
            a = prompt(`Ваш любимый жанр под номером ${i}`, "");
        }
        personalMovieDB.genres.push(a);
    }      
}