const dotenv = require('dotenv');
const express = require('express');
const app  = express();
const port = 8000;
const cors = require('cors')
dotenv.config();

const mongodb = process.env.MONGO_DB;


const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Connection to the MongoDB Database
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/project6');
mongoose.connect(mongodb).then((response) => {
    console.log(response);
})
app.use(cors())


const NovelRouter = require('./routes/novels');
app.use('/api/novels', NovelRouter );

const AnnouncementRouter = require('./routes/announcements')
app.use('/api/announcements', AnnouncementRouter );

app.get("/", (request, response) => {
    response.send("Recieved Mesage");

})

app.listen( port, () => {
    console.log(`Express App is live at port ${port}`);
});
