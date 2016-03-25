import db from '../db';
import users from './users';
import likes from './likes';
import ratings from './ratings';
import reviews from './reviews';
import entities from './entities';
import bookmarks from './bookmarks';
import react from './react';

export default ({ Router }) => {
  return Router()
  .use(users(Router, db))
  .use(entities(Router, db))
  .use('/reviews.json', reviews(Router, db))
  .use('/ratings.json', ratings(Router, db))
  .use('/likes.json', likes(Router, db))
  .use('/bookmarks.json', bookmarks(Router, db))
  .use(react);
};
