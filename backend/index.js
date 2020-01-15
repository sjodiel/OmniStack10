const express =  require('express');

const app = express();

// get, post, put, delete

app.get('/', (request, response) => {

    return response.json({message: 'Hello OmniStack'});

});

app.listen(3001);
