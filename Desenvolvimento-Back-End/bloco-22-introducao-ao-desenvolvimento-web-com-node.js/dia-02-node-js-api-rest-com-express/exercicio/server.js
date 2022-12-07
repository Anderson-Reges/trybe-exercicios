const { app, readFile, fs, moviesPath } = require('./app');

app.listen(3001, () => console.log('O servidor esta online para porta: 3001'));

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/movies', async (request, response) => {
  try {
    const movies = await readFile();
    response.status(200).json(movies);
  } catch (err) {
    response.status(500).send({ message: err.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body
    const movies = await readFile();
    const newMovie = {
      id: movies.length + 1,
      movie: movie,
      price: price
    }
    movies.push(newMovie)
    res.status(200).json(movies)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});