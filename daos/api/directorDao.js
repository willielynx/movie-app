const con = require('../../config/dbconfig')
const  { queryAction } = require('../../helpers/queryAction')

const directorDao = {
    table: 'director',

    findByLetter: (res, table, letter)=> {

        const sql = `SELECT fName, lName FROM director where lName like '${letter}%'`

        con.query(
            sql,
            (error, rows)=>{
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = directorDao