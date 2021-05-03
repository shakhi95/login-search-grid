const mockData = [
  {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    imdbID: "tt2975590",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Batman",
    Year: "1989",
    imdbID: "tt0096895",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
  },
  {
    Title: "Batman Returns",
    Year: "1992",
    imdbID: "tt0103776",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
  },
  {
    Title: "Batman Forever",
    Year: "1995",
    imdbID: "tt0112462",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Batman & Robin",
    Year: "1997",
    imdbID: "tt0118688",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
  },
  {
    Title: "The Lego Batman Movie",
    Year: "2017",
    imdbID: "tt4116284",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Animated Series",
    Year: "1992–1995",
    imdbID: "tt0103359",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Under the Red Hood",
    Year: "2010",
    imdbID: "tt1569923",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Dark Knight Returns, Part 1",
    Year: "2012",
    imdbID: "tt2313197",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Killing Joke",
    Year: "2016",
    imdbID: "tt4853102",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Dark Knight Returns, Part 2",
    Year: "2013",
    imdbID: "tt2166834",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Mask of the Phantasm",
    Year: "1993",
    imdbID: "tt0106364",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTRiMWM3MGItNjAxZC00M2E3LThhODgtM2QwOGNmZGU4OWZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Year One",
    Year: "2011",
    imdbID: "tt1672723",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Assault on Arkham",
    Year: "2014",
    imdbID: "tt3139086",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDU1ZGRiY2YtYmZjMi00ZDQwLWJjMWMtNzUwNDMwYjQ4ZTVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Movie",
    Year: "1966",
    imdbID: "tt0060153",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmM1OGIzM2UtNThhZS00ZGNlLWI4NzEtZjlhOTNhNmYxZGQ0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Arkham City",
    Year: "2011",
    imdbID: "tt1568322",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDE2ZDFhMDAtMDAzZC00ZmY3LThlMTItMGFjMzRlYzExOGE1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Gotham Knight",
    Year: "2008",
    imdbID: "tt1117563",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2I0YTFjOTUtMWYzNC00ZTgyLTk2NWEtMmE3N2VlYjEwN2JlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Superman/Batman: Apocalypse",
    Year: "2010",
    imdbID: "tt1673430",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Son of Batman",
    Year: "2014",
    imdbID: "tt3139072",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjdkZWFhNzctYmNhNy00NGM5LTg0Y2YtZWM4NmU2MWQ3ODVkXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  },
  {
    Title: "Batman Beyond",
    Year: "1999–2001",
    imdbID: "tt0147746",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTBiZjFlZDQtZjc1MS00YzllLWE5ZTQtMmM5OTkyNjZjMWI3XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg",
  },
  {
    Title: "Batman Beyond: Return of the Joker",
    Year: "2000",
    imdbID: "tt0233298",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmRmODEwNzctYzU1MS00ZDQ1LWI2NWMtZWFkNTQwNDg1ZDFiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
  },
  {
    Title: "Superman/Batman: Public Enemies",
    Year: "2009",
    imdbID: "tt1398941",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Bad Blood",
    Year: "2016",
    imdbID: "tt4870838",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman vs. Robin",
    Year: "2015",
    imdbID: "tt4324274",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Arkham Asylum",
    Year: "2009",
    imdbID: "tt1282022",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMWE1MGI0ZmItNzU2My00Mzk5LThkNTMtMmFiMjRiZDNlNzkwXkEyXkFqcGdeQXVyNjgyODQ1Mzk@._V1_SX300.jpg",
  },
  {
    Title: "Batman",
    Year: "1966–1968",
    imdbID: "tt0059968",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkzNDY5NTg5MF5BMl5BanBnXkFtZTgwNzI4NzM1MjE@._V1_SX300.jpg",
  },
  {
    Title: "Batman Ninja",
    Year: "2018",
    imdbID: "tt7451284",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjFlMDc2NGMtYjkyMS00MTlhLTgxNWItMmYxZjc5NzVhMGE0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
  },
  {
    Title: "The New Batman Adventures",
    Year: "1997–1999",
    imdbID: "tt0118266",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2JkYjE4MWYtMGJlZC00OWVhLWJlMmUtNGQzYjM0ZDUxNGI2XkEyXkFqcGdeQXVyMjM5NDQzNTk@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Hush",
    Year: "2019",
    imdbID: "tt8752440",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWY5ODhlMWQtNDRiMC00MDk0LTgyMDItYmRmYWFkMjdmYWFmXkEyXkFqcGdeQXVyNTA4NzExMDg@._V1_SX300.jpg",
  },
  {
    Title: "Batman & Mr. Freeze: SubZero",
    Year: "1998",
    imdbID: "tt0143127",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTQ0NmUzMzAtODk5My00MzYwLThlYWEtY2NkOGNhODg5ZmY1XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Gotham by Gaslight",
    Year: "2018",
    imdbID: "tt7167630",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTJhNjYyMGItODdhOC00ZTZmLTk1MTMtZDRhMmZkYTRiOGJkXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0450392",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWRkMGNjYmQtMTJlMi00ODgyLWIyZGEtOTZkY2FlZWI3NzIwXkEyXkFqcGdeQXVyNDEyNjEzOTg@._V1_SX300.jpg",
  },
  {
    Title: "Batman and Harley Quinn",
    Year: "2017",
    imdbID: "tt6556890",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTQzM2JkYTAtY2ExNi00N2ZhLWE5NDctMDQyMWU5ZjcwZDEwXkEyXkFqcGdeQXVyMjM5NDQzNTk@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Mystery of the Batwoman",
    Year: "2003",
    imdbID: "tt0346578",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2IwYTVlZGQtOTRhNy00MDI5LThmMTUtYWI1MGUwMGFkYzI1XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Arkham Origins",
    Year: "2013",
    imdbID: "tt2842418",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzczNTkxODU5NF5BMl5BanBnXkFtZTgwNDcwMzU1MDE@._V1_SX300.jpg",
  },
  {
    Title: "The Batman",
    Year: "2004–2008",
    imdbID: "tt0398417",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjE2MzA0YTgtNjQ3MS00MjMxLWE2MzMtOGYzMTZjZjFiYTI0XkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
  },
  {
    Title: "The Batman vs. Dracula",
    Year: "2005",
    imdbID: "tt0472219",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkyMTMwNjA3MV5BMl5BanBnXkFtZTcwNzE2NTI2OQ@@._V1_SX300.jpg",
  },
  {
    Title: "The Batman Superman Movie: World's Finest",
    Year: "1997",
    imdbID: "tt0169590",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzk0MTI0YmUtMDgwOC00M2U5LTgzMDktM2RhN2M3ZDVmOWFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman vs Teenage Mutant Ninja Turtles",
    Year: "2019",
    imdbID: "tt9775360",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzk3MGZlYWQtNDU4Ny00Y2I5LTk2YmItM2QxYjFiMjM0ZmQxXkEyXkFqcGdeQXVyNDUzMTkzMDI@._V1_SX300.jpg",
  },
  {
    Title: "Batman vs Teenage Mutant Ninja Turtles",
    Year: "2019",
    imdbID: "tt9775360",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzk3MGZlYWQtNDU4Ny00Y2I5LTk2YmItM2QxYjFiMjM0ZmQxXkEyXkFqcGdeQXVyNDUzMTkzMDI@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Arkham Knight",
    Year: "2015",
    imdbID: "tt3554580",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc0MTcxMzQ0Ml5BMl5BanBnXkFtZTgwNDc3MzE0MTE@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Brave and the Bold",
    Year: "2008–2011",
    imdbID: "tt1213218",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDBiODMwZmYtYWFiZC00N2I2LWJiMDktMGYwM2QxNzUxMzc3XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
  },
  {
    Title: "Batman: Dead End",
    Year: "2003",
    imdbID: "tt0374526",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkzMDI0MTIyNF5BMl5BanBnXkFtZTYwMTUxMTY3._V1_SX300.jpg",
  },
  {
    Title: "Batman Beyond: The Movie",
    Year: "1999",
    imdbID: "tt0231237",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTJjNmViYjEtNGRjZS00MDk3LThmZjktNzhkZDg1YjBiNjA0XkEyXkFqcGdeQXVyNjYyODY4NDU@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Return of the Caped Crusaders",
    Year: "2016",
    imdbID: "tt5973626",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTdlNjNhOGEtZTk2Yy00MjI5LTllOTMtODczMWFmNmNhZmVlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lego Batman: The Movie - DC Super Heroes Unite",
    Year: "2013",
    imdbID: "tt2465238",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjRjOGU2NzUtMjAwOC00MDI3LThmNmUtNTVkZTQ0MDEyYTc1XkEyXkFqcGdeQXVyMTA5NzUzODM4._V1_SX300.jpg",
  },
  {
    Title: "Beware the Batman",
    Year: "2013–2014",
    imdbID: "tt2329077",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2IzMGUzN2UtZDI4NS00NWM3LTgyNTYtYWJiNTg5OGNjNWQ0XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
  },
  {
    Title: "Batman vs. Two-Face",
    Year: "2017",
    imdbID: "tt6142314",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2MyY2NjNzgtZDAxNi00OWM2LTg3MDUtOTcyOGU1OTdjODNjXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Telltale Series",
    Year: "2016",
    imdbID: "tt5785964",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDQ0YTU2ZjgtZmZiZC00YWM2LTljYWYtOWI2NzUzZmIwMzg4XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
  },
];

export default mockData;
