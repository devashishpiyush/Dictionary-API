const express = require("express");
require("dotenv").config();

const app = express();

/**
 * API endpoint
 */
const endpoint = "/api/v1";

/**
 * To fetch the whole dictionary.
 */
app.get(`${endpoint}/dictionary`, (req, res) => {
    console.log(`GET : ${endpoint}/dictionary`);

    res.json(
        {
            message : "Show the whole dictionary."
        }
    );
});

/**
 * To delete the whole dictionary.
 */
app.delete(`${endpoint}/dictionary`, (req, res) => {
    console.log(`DELETE : ${endpoint}/dictionary`);

    res.json(
        {
            message : "Delete the whole dictionary."
        }
    );
});

/**
 * To fetch a specific word from the dictionary.
 */
app.get(`${endpoint}/dictionary/:key`, (req, res) => {
    const key = req.params.key;
    console.log(`GET : ${endpoint}/dictionary/${key}`);

    res.json(
        {
            message : "To get a specific word form the dictionary."
        }
    );
});

/**
 * To add a specific word in the dictionary.
 */
app.post(`${endpoint}/dictionary`, (req, res) => {
    console.log(`POST : ${endpoint}/dictionary`);

    res.json(
        {
            message : "To add a specific word in the dictionary."
        }
    );
});

/**
 * To delete a specific word from the dictionary.
 */
app.delete(`${endpoint}/dictionary/:key`, (req, res) => {
    const key = req.params.key;
    console.log(`DELETE : ${endpoint}/dictionary/${key}`);

    res.json(
        {
            message : "Delete a specific word from the dictionary."
        }
    );
});

/**
 * To update a specific field
 */
 app.patch(`${endpoint}/dictionary/:key`, (req, res) => {
    const key = req.params.key;
    console.log(`PATCH : ${endpoint}/dictionary/${key}`);

    res.json(
        {
            message : "Update a specific field of the word."
        }
    );
});


/**
 * To update the whole word or all the fields.
 */
 app.put(`${endpoint}/dictionary/:key`, (req, res) => {
    const key = req.params.key;
    console.log(`PUT : ${endpoint}/dictionary/${key}`);

    res.json(
        {
            message : "Update all the field of the word i.e. replacement."
        }
    );
});

/**
 * Server listining at specific port
 */
app.listen(process.env.PORT, () => {
    console.log(`Server runnig at port ${process.env.PORT}`);
});