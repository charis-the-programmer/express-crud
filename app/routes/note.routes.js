module.exports = (app) => {
    const notes = require('../controllers/note.controllers.js');

    // create a new note
    app.post('/notes', notes.create);

    // get all notes
    app.get('/notes', notes.findAll);

    // get single note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // update a note with noteId
    app.put('/notes/:noteId', notes.update);

    // delete a note with noteId
    app.delete('/notes/:noteId', notes.delete);
}