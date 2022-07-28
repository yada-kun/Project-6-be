const express = require('express');
const Router = express.Router();

const Novel = require('../models/Novel');

Router.get('/', ( request, response) => {
    Novel.find().then( data => {
        response.send( data );
    });
});

Router.get('/:id',(request,response) => {
    Novel.findOne({_id : request.params.id}).then(data => {
        response.send(data);
    })
})

Router.post('/', ( request, response ) => {
    console.log( request.body );

    const newNovel = new Novel( request.body );
    newNovel.save().then( data => {
        response.send( data );
    })
});

/* Delete and Update */
Router.delete('/:id', ( request, response ) => {
    // request.params.id 
    Novel.deleteOne({ _id: request.params.id }).then( data => {
        // console.log( data );
        // data.deletedCount = 1, document was deleted
        if( data.deletedCount == 1 ){
            response.send({ message: "Item was successfully deleted"});
        }
    });
});

Router.put('/:id', ( request, response ) => {
    Novel.updateOne({ _id: request.params.id }, request.body ).then( data => {
        console.log( data );
        if( data.modifiedCount == 1 ){
            response.send({ message: "Item was successfully updated" });
        }else{
            response.send({ error: "Item not found" });
        }
    });
});




module.exports = Router;