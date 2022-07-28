const express = require('express');
const Router = express.Router();

const Announcement = require('../models/Announcement');

Router.get('/', ( request, response) => {
    Announcement.find().then( data => {
        response.send( data );
    });
});

Router.get('/:id',(request,response) => {
    Announcement.findOne({_id : request.params.id}).then(data => {
        response.send(data);
    })
})



Router.post('/', ( request, response ) => {
    console.log( request.body );

    const newAnnouncement = new Announcement( request.body );
    newAnnouncement.save().then( data => {
        response.send( data );
    })
});

/* Delete and Update */
Router.delete('/:id', ( request, response ) => {
    console.log(request.body);
    // request.params.id 
    Announcement.deleteOne({ _id: request.params.id }).then( data => {
        // console.log( data );
        // data.deletedCount = 1, document was deleted
        if( data.deletedCount == 1 ){
            response.send({ message: "Item was successfully deleted"});
        }
    });
});

Router.put('/:id', ( request, response ) => {
    Announcement.updateOne({ _id: request.params.id }, request.body ).then( data => {
        console.log( data );
        if( data.modifiedCount == 1 ){
            response.send({ message: "Item was successfully updated" });
        }else{
            response.send({ error: "Item not found" });
        }
    });
});


module.exports = Router;