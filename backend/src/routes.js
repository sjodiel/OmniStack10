const { Router } = require('express');

const routes = Router();

routes.post('/', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Hello OmniStack'});

});

module.exports = routes;
