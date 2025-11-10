const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const productionDao = {
    table: 'production',

    findByName: (res, table, letter)=> {
        const sql = `SELECT * FROM production WHERE production LIKE '${letter}%'`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = productionDao