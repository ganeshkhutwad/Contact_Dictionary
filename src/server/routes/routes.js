/**
@author Ganesh Khutwad
    - It contains all REST APIs.
 */
const path = require('path');
const fs = require('fs');

// read file and return data on success or error.
const readFile = (fileName, callback) => {
    fs.readFile(path.join(__dirname, fileName), (err, data) => {
        if (err) throw err;
        callback(data);
    });
};

// write content to file.
const writeFile = (fileName, content, callback) => {
    fs.writeFile(path.join(__dirname, fileName), content, (err) => {
        if (err) throw err;
        callback('Data has written to file.');
    });
};

// All REST Endpoints.
const appRouter = function (app) {
    
    // root endpoint to access document file.
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
    });

    // To get contacts list. 
    app.get('/contactLists', (req, res) => {
        readFile('/contactList.json', (data) => {
            const lists = JSON.parse(data);
            res.status(200).send(lists);
        });
    });

    // To CREATE contact.
    app.post('/contactLists', (req, res) => {
        readFile('/contactList.json', (data) => {
            const lists = JSON.parse(data);
            const newLists = lists.concat(req.body);
            writeFile('/contactList.json', JSON.stringify(newLists), (message) => {
                res.status(200).send(newLists);
            });
        });
    });

    // To UPDATE contact
    app.put('/contactLists', (req, res) => {
        readFile('/contactList.json', (data) => {
            const lists = JSON.parse(data);
            const newLists = lists
                                .filter(list => list.id !== req.body.id)
                                .concat([req.body]);
            writeFile('/contactList.json', JSON.stringify(newLists), (message) => {
                res.status(200).send(newLists);
            }); 
        });
    });

    // To DELETE contact.
    app.delete('/contactLists/:id', (req, res) => {
        readFile('/contactList.json', (data) => {
            const lists = JSON.parse(data);
            const newLists = lists.filter((ele) => ele.id !== Number(req.params.id));
            writeFile('/contactList.json', JSON.stringify(newLists), (message) => {
                res.status(200).send(newLists);
            });
        });
    });
};

module.exports = appRouter;