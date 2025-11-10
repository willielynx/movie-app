const con = require('../../config/dbconfig')
const { queryAction} = require('../../helpers/queryAction')

const genreDao = {
    table: 'genre',

    movieByGenre: (res, table, genre)=> {
        const sql = `SELECT m.movie_id, m.title, g.genre
                    FROM movie m 
                    JOIN movie_to_genre mtg using (movie_id)
                    JOIN genre g using (genre_id)
                    where g.genre = '${genre}'`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = genreDao