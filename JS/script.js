'use strict';
let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b; //this
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (this.count < 10) { //this
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) { //this
            alert('Вы классический зритель');
        } else if (this.count > 30) { //this
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка');
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(this); // this
        }
    },

    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },

    writeYourGenres: function () {
        // for (let i = 0; i < 3; i++) {
        //     this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, ''); //this
        //     if (this.genres[i] == '' || this.genres[i] == null) {
        //         i--;
        //     }            
        // }
        for (let i = 0; i < 1; i++) {
            let genres = prompt('Введите ваши любимые жанры через запятую:', '');
            if (genres == '' || genres == null) {
                i--;
            } else {
                this.genres = genres.split(', ').sort();
            }
        }
        this.genres.forEach((item, index) => {
            console.log(`Любимый жанр № ${index+1} - это ${item}`);        
        });
    }
    
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
// console.log(personalMovieDB);

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '');
//         const b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//         }
//     }
// }

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         alert('Вы киноман!');
//     } else {
//         alert('Произошла ошибка');
//     }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
//     }
// }
// writeYourGenres();
// console.log(personalMovieDB);