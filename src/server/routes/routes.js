/**
@author Ganesh Khutwad
 */
const path = require('path');
const fs = require('fs');

const readFile = (fileName, callback) => {
    fs.readFile(path.join(__dirname, fileName), (err, data) => {
        if (err) throw err;
        callback(data);
    });
};

const writeFile = (fileName, content, callback) => {
    fs.writeFile(path.join(__dirname, fileName), content, (err) => {
        if (err) throw err;
        callback('Data has written to file.');
    });
};

const appRouter = function (app) {
    
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
    });

    app.get('/contactLists', (req, res) => {
        readFile('/contactList.json', (data) => {
            const lists = JSON.parse(data);
            res.status(200).send(lists);
        });
    });

    app.post('/contactLists', (req, res) => {
        readFile('/contactList.json', (data) => {
            const lists = JSON.parse(data);
            const newLists = lists.concat(req.body);
            writeFile('/contactList.json', JSON.stringify(newLists), (message) => {
                res.status(200).send(newLists);
            });
        });
    });

    app.put('/contactLists', (req, res) => {
        readFile('/contactList.json', (data) => {
            const lists = JSON.parse(data);
            const newLists = lists
                                .filter(list => lists.id !== req.body.id)
                                .concat([req.body]);
            writeFile('/contactList.json', JSON.stringify(newLists), (message) => {
                res.status(200).send(newLists);
            }); 
        });
    });

    app.delete('/contactLists/:id', (req, res) => {
        readFile('/contactList.json', (data) => {
            const lists = JSON.parse(data);
            const newLists = lists.filter((ele) => ele.id !== req.params.id);
            writeFile('/contactList.json', JSON.stringify(newLists), (message) => {
                res.status(200).send(newLists);
            });
        });
    });
};

module.exports = appRouter;