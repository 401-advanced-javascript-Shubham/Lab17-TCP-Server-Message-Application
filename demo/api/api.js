'use strict';

const net = require('net');

const express =  require('express');

const app= express();
const port =  process.env.port || 8080;

const client =  new net.Socket();
client.connect(3000,'localhost', () => console.log('Connected'));

app.get('/things', getThings);
app.post('/things', createThings);
app.delete('/things', deleteThings);
app.put('/things', updateThings);

function getThings(req,res) {
    let things = {
        count :2,
        reults:[{},{}]
    }

    let event = {
        eventName:'fetch',
        payload: 'things'
    }

    client.write(JSON.stringify(event));
    res.status(200).json(things);
}

function createThings(req,res) {
    let things = {
        name: "test"
    }

    let event = {
        eventName:'create',
        payload: 'things'
    }

    client.write(JSON.stringify(event));
    res.status(200).json(things);
}

function deleteThings(req,res) {
    let things = {};

    let event = {
        eventName:'delete',
        payload: 'things'
    }

    client.write(JSON.stringify(event));
    res.status(200).json(things);
}

function updateThings(req,res) {
    let things = {
        name: "test"
    }

    let event = {
        eventName:'update',
        payload: 'things'
    }

    client.write(JSON.stringify(event));
    res.status(200).json(things);
}

app.listen(port, console.log('API up on', port));