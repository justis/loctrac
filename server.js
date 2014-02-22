var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded());

var id = 0;
var trackedObjects = {
};

app.get('/', function(req, res) {
  res.sendfile('static/index.html');
});

app.post('/tracked-object', function(req, res) {
	trackedObjects['' + id++] = req.body;
	res.send('/tracked-object/' + id);
});

app.get('/tracked-object/:id', function(req, res) {
	res.send(trackedObjects[req.params['id']]);
});

app.put('/tracked-object/:id', function(req, res) {
	trackedObjects[req.params['id']] = req.body;
	res.send('/tracked-object/' + req.params['id']);
});

app.listen(3000);
