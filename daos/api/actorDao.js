const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const actorDao = {
    table: 'actor',

    findByLetter: (res, table, letter)=> {

        const sql = `SELECT first_name, last_name FROM actor where last_name like '${letter}%'`

        con.query(
            sql,
            (error, rows) => {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = actorDao