const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


const log = console.log

yargs.command({
    command: 'add',
    describe: 'Adds a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log('Title: ', argv.title)
        log('Body: ', argv.body)

        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        log('Removing a note')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function() {
        log('Reading a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function() {
        log('listing notes')
    }
})


yargs.parse()
