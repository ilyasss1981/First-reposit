/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list');
    
    //----------------------------1-----------------------------
    adv.forEach(item => {
        item.remove();
    });
    //----------------------------2---------------------------
    genre.textContent = 'Драма';
    //----------------------------3----------------------------
    // poster.style.cssText = 'background: url(img/bg.jpg) center; background-size: 100%'; // вариант 1
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    //---------------------------- 4-5 ----------------------------
    movieList.innerHTML = ''; // очищеаем список фильмов
    movieDB.movies.sort(); // сортируем массив фильмов
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    // movieList.forEach((item, index) => {
    //     item.innerHTML = movieDB.movies[index];
    // });
    
    //=======================Практика 33 урока===========================================
    
    //------------------------------------ 1 ----------------------------------------
    const submitButton = document.querySelector('button'),
          filmName = document.querySelector('.adding__input'),
          favoriteFilm = document.querySelector('[type = "checkbox"]');
    let deleteFilm = document.querySelectorAll('.delete');
    
    function addFilm(e) {
        e.preventDefault();
        if (filmName.value != '') {        
            movieDB.movies.push(filmName.value);
    
            movieList.innerHTML = '';
            movieDB.movies.sort();
            movieDB.movies.forEach((film, i) => {
                if (film.length > 21) {
                    film = film.slice(0, 21) + '...';
                }
                movieList.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                    </li>
                `;
            });
            filmName.value = '';
    
            if (favoriteFilm.checked == true) {
                console.log('Добавляем любимый фильм');
                favoriteFilm.checked = false;
            }        
        }
        deleteFilm = document.querySelectorAll('.delete');
        console.log(deleteFilm);
        return movieDB.movies;
    }
    
    
    
    // console.log(deleteFilm);
    deleteFilm.forEach((film, i) => {
        film.addEventListener('click', () => {
            //console.log(i);
            deleteFilm = document.querySelectorAll('.delete');
            movieDB.movies.splice(i, 1);
            movieList.innerHTML = '';
            movieDB.movies.forEach((film, i) => {
                movieList.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                    </li>
                `;
            });         
        });
    });
    
    submitButton.addEventListener('click', addFilm);
});






        


