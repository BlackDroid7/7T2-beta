const { response } = require('express')
const express = require('express')
const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
//const url = 'mongodb://host.docker.internal:27017'
const database = '7T2'
const client = new MongoClient(url)
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const cors = require('cors');
let reponse;
let reports;

app.use(cors());

async function getAll() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Employees');
    reponse = await collection.find({}).toArray();
}

async function getreports() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Reports');
    reports = await collection.find({}).toArray();
}

async function insertPremarketReport(body) {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Reports');
    collection.insertOne(body);
}

app.get("/home", (req, res) => {
    res.send("Welcome to 7T2.com");
})

app.post("/reports", (req, res) => {
    insertPremarketReport(req.body);
    res.send("Working fine");
});

app.get("/reports", async (req, res) => {
    await getreports();
    res.send(reports);
});

app.get("/team", async (req, res) => {
    await getAll();
    res.send(reponse);
})

app.listen(8081, () => {console.log("Application started on port 8081");})
