'use strict';

    // Exports all the functions to perform on the db
    module.exports = {
	getEm : getEm, 
	postIt : postIt, 
	putIt : putIt, 
	delIt : delIt
    };

    //GET /student operationId
    function getEm(req, res, next) {
        res.json({success: "succesful Get operation, empty database"});
    }
    //POST /student operationId
    function postIt(req, res, next) {
	res.json(req.body)
    }
    //PUT /student/{id} operationId
    function putIt(req, res, next) {
        //var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        //var student = req.body;
            res.json(req.body);
    }
    //DELETE /student/{id} operationId
    function delIt(req, res, next) {
        //var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        res.json(req.body,{name: "someone"}, {age: 0});
    }

