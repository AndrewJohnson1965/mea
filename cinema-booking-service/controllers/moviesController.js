import Movie from '../models/movie.js'

async function getAllMovies(req, res, next) {
    try {
        const movies = await Movie.find()
        return res.status(200).json(movies)
    } catch (err) {
        next(err)
    }
}

async function createMovie(req, res, next) {
    try {
        const newMovie = await Movie.create(req.body);
        return res.status(201).send(newMovie)
    } catch (err) {
        next(err)
    }
}

export default {
    getAllMovies, createMovie
}