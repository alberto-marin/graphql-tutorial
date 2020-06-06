const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to database
mongoose.connect(
  `mongodb+srv://alberto:${process.env.PASSWORD}@cluster0-kwbw2.mongodb.net/gql-ninja?retryWrites=true&w=majority`
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
