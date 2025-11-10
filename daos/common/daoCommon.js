const con = require('../../config/dbconfig')
const {queryAction } = require('../../helpers/queryAction')

const daoCommon = {

    findAll: (res, table)=> {

        con.query(
            `SELECT * FROM ${table};`,

            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },
    findById: (res, table, id)=> {

        con.query(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,

            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    sort: (res, table, sorter)=> {

        con.query(
            `SELECT * FROM ${table} ORDER BY ${sorter};`,

            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    create: (req, res, table)=> {
        
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')} = ?;`,
                
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.json({
                            Last_id: dbres.insertId
                        })
                    } else {
                        console.log(`${table} Dao error:`, error)
                    }
                }
            )
        }
    }
}

module.exports = daoCommon