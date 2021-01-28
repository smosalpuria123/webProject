const express = require('express');
const router = express.Router();
const axios = require('axios')

 apiKey = '5caa0ab156e652429a578c686ab1fdfe';

 router.get('/search', function(req, res, next) {

    const search = req.query.title;
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+apiKey+ '&query='+search;
    console.log('Trying to get data from ' + url);

    axios.get(url)
    .then(function (response) {
        // handle success
        res.send(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        res.send(error);
    })
})

router.get('/result/:imdbId', function(req, res, next) {
    const imdbId = req.params.imdbId;
    const url = 'https://api.themoviedb.org/3/movie/'+imdbId+'?api_key='+apiKey+'&language=en-US&append_to_response=images,videos,people&include_image_language=en,null';
    axios.get(url)
        .then(function (response) {
            // handle success
            res.send(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            res.send(error);
        })
});



module.exports = router;