require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3004;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/:listingid', express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`App listening at ${port}`);
});


