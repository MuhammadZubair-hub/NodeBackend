import express from 'express'
import  { deleteJokes, getJoke, getJokes, postJokes, updatedJokes }from '../controllers/jokes.js';


const jokesRouter = express.Router();


jokesRouter.post('/addJokes', postJokes)
.get('/jokes', getJokes)
.get('/jokes/:id', getJoke)
.patch('/updatejokes',updatedJokes )
.delete('/deleteJokes/:id',deleteJokes );


export default jokesRouter;