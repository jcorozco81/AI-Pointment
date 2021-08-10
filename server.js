require('dotenv').config();
const app = require('./app');
const path = require('path');



const sequelize = require('./config/connection');


//START SERVER
const port = process.env.PORT || 4000;


sequelize.sync({ force: false }).then(() => {
app.listen(port, () => console.log(`App running on port ${port}...`));
});