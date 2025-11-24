import { jokes } from "../db/jokes.js";




 export function postJokes(req, res) {

        const newJokes = req.body;
        jokes.push(newJokes);


        res.send(jokes);

    };

 export   function getJokes(req, res) {


        res.send(jokes);

    };
  export    function getJoke(req, res) {
        const { id } = req.params;
        console.log(id)

        const joke = jokes.find(prev => prev.id === id);
        console.log(joke)
        res.send(joke);
    };
   export   function updatedJokes(req, res) {
        const newJokes = req.body;
        console.log('jj', newJokes);
        const jokeINDEX = jokes.findIndex(prev => prev.id === newJokes.id);
        const updatedOne = jokes.splice(jokeINDEX, 1, { id: newJokes.id, });
        console.log(updatedOne);
        res.status(201).json(updatedOne);
    };

   export   function deleteJokes(req, res) {

        const jokeINDEX = jokes.findIndex(prev => prev.id === req.params.id);
        jokes.splice(jokeINDEX, 1);

        res.status(201).json(jokes);
    }

