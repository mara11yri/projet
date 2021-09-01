const express = require('express')
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const morgan = require("morgan");
var cors = require('cors');


const app = express();
app.use(fileupload({ useTempFiles: true }));
app.use(morgan("tiny"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000;
const {
    MONGOURI
} = require('./keys')

//tuSJigUS6XvTlkoS


mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

mongoose.connection.on('connected', () => {
    console.log('connected to mongo yeah')
})
mongoose.connection.on('error', (err) => {
    console.log('err connecting', err)
})
require("./models/admin");
require('./models/user2');
require("./models/produit");





app.use(cors());
app.use(express.json())
app.use(require('./routes/produitroute'))
app.use(require('./routes/auth2'))
app.use(require("./routes/authadmin"))
app.use(require('./routes/admin'))

app.listen(PORT, () => {
    console.log("server is running on", PORT)
});