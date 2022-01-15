"use strict";

const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    mostLoveFilm: function () {
        let str = "";
        while (str == "" || str == null || str.length > 50) {
            str = prompt("Название любимого фильма...", "");
        }
        return str;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите последний просмотренный фильм", "");
            while (a == "" || a == null || a.length > 50) {
                alert("Чурка введи НАЗВАНИЕ фильма....");
                a = prompt("Введите название фильма", "");
            }
            let b = +prompt("Оцените фильм от 0 до 10", "");
            while (b == "" || b == null || isNaN(b) || b < 0 || b > 10) {
                alert("Ошибка, введите число от 0 до 10 включительно");
                b = +prompt("Оцените фильм от 0 до 10", "");
            }
            personalMovieDB.movies[a] = b;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("вы киноман");
        } else {
            console.log("error");
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function (callback) {
        for (let i = 1; i <= 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}`, "");
            while (a == "" || a == null || a.length > 50) {
                a = prompt(`Ваш любимый жанр под номером ${i}`, "");
            }
            personalMovieDB.genres.push(a);
        }
        callback();
    },
    toggleVissibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    start: () => {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже успели посмотреть?", "");
        }
    },
    showGenres: function () {
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр номер ${i + 1} - это ${item}`);
        });
    }
};