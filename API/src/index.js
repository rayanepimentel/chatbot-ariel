const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const watson = require('../src/watson/client-watson');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/mensagem/', (req, res) => {
    const { text, context = {} } = req.body;

    const params = {
        input: { text },
        workspaceId: 'abd79459-36ed-49a1-9305-50f6559b35dd'
      }
      .then(response => {
        console.log(JSON.stringify(response.result, null, 2));
      })
      .catch(err => {
        console.log(err);
      });

    watson.message(params, (err, response) => {
        if (err) res.status(500).json(err);
        res.json(response);
    });
    
});


app.listen(port, () => console.log(`Running on port ${port}`));