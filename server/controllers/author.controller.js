const Author = require('../models/author.model')

module.exports = {
// CREATE //
    createAuthor: (request, response) => {
        Author.create(request.body)
            .then(newAuthor => response.json(newAuthor))
            .catch(error => response.json(error))},

// READ //
    getAllAuthors: (request, response) => {
        Author.find()
            .then(allAuthors => response.json(allAuthors))
            .catch(error => response.json(error))},

    getOneAuthor: (request, response) => {
        Author.findById(request.params.id)
            .then(oneAuthor => response.json(oneAuthor))
            .catch(error => response.json(error))},

// UPDATE //
    updateAuthor: (request, response) => {
        Author.findByIdAndUpdate(request.params.id, request.body, {new: true, runValidators: true})
            .then(updatedAuthor => response.json(updatedAuthor))
            .catch(error => response.json(error))},

// DELETE //
    deleteAuthor: (request, response) => {
        Author.findByIdAndDelete(request.params.id)
            .then(result => response.json(result))
            .catch(error => response.json(error))}
}

// module.exports.createAuthor