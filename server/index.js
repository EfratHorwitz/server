const express = require('express');
const request  = require('request');
const app = express()
const port = 3001



app.get("/getMovies", async (req, res) => {
  let term =req.query.term;
  let page =req.query.page;
  request(`https://www.omdbapi.com/?apikey=aada18f6&s=${term}&page=${page}`, (error, response, body)=> {

    if(error){
      console.error('error:', error);
    }
    res.send(JSON.parse(body))

  })
})

app.get("/getMovieById", async (req, res) => {
  let movieId =req.query.movieId;
  request(`https://www.omdbapi.com/?apikey=aada18f6&i=${movieId}`, (error, response, body)=> {

    if(error){
      console.error('error:', error);
    }
    res.send(JSON.parse(body))

  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));