let movieDB = {
  showFilm: function () {
    alert(
      `Сьогодні поговоримо про фільм ${movieDB.name}, його було виконано в жанрі ${movieDB.genre}. Автором Фільму став ${movieDB.author} котрий зняв його в ${movieDB.year} році. `
    );
  },
};

movieDB.name = prompt("Введіть назву фільму", " ");
movieDB.genre = prompt("Введіть жанр фільму", " ");
movieDB.author = prompt("Введіть ім'я автора фільму", " ");
movieDB.year = prompt("Введіть рік виходу фільму", " ");
let infoFilm = confirm("Вивести інформацію про фільм?");

if (infoFilm) {
  movieDB.showFilm();
} else {
  alert("Ви не ввели данні про фільм!");
}
