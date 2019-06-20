const express = require('express');
const app = express();
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true }, (err) => {

    if(err){
        console.error(err)
    } else {
        console.log(`> Connected successfully to mongodb.`);
    }

});

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(PORT, () => {
    console.log(`> GraphQL Server listening on port ${PORT}`);
});