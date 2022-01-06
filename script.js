"use strict";
function getAnswer(str2) {
    let temp = '';
    while (temp == "" || temp == null) {
        temp = prompt(str2, "");
    }
    if (temp.length > 50) {
        getAnswer(str2);
    }
    return temp;
}

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let mostLoveFilm = getAnswer("Название любимого фильма?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("вы киноман");
} else {
    console.log("error");
}

for (let i = 0; i < 2; i++) {
    let a = getAnswer("Один из последних просмотренных фильмов"),
        b = +prompt("оцените от 0 до 10", "");
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);

alert(`me too, like ${mostLoveFilm}`);