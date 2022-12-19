import express from 'express';
import moviesController from '../controllers/moviesController.js';

const Router = express.Router();

Router.route('/movies')
  .get(moviesController.getAllMovies)
  .post(moviesController.createMovie);

export default Router;