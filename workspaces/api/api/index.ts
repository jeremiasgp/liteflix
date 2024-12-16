import express, { Request, Response } from 'express';
import { upload } from './upload';
import cors from 'cors';
import { type Movie } from 'liteflix-models';

const app = express();
const port = 5005;
const DEFAULT_MOVIE_VALUES: Omit<Movie, 'title' | 'backdrop_path' | 'original_title' | 'id' | 'poster_path'> = {
  adult: false,
  genre_ids: [878, 28, 12],
  original_language: 'en',
  overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tellus lectus. Vivamus ullamcorper magna turpis.',
  popularity: 6905.968,
  release_date: '2024-10-22',
  video: false,
  vote_average: 6.428,
  vote_count: 995
};

const values: Array<Movie> = [];

app.use(cors({ origin: '*' }));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded());
app.use(express.json()); 

app.get('/', (req: Request, res: Response) => {
  res.send({ values });
})

app.post('/movie', upload.single('picture'), (req: Request, res: Response) => {
  const picture = req.file?.filename  || '';
  const movie: Movie = {
    ...DEFAULT_MOVIE_VALUES,
    id: Date.now(),
    title: req.body.title,
    backdrop_path: picture,
    original_title: picture,
    poster_path: picture
  };
  values.push(movie);
  res.send({ values });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
})

export default app;
