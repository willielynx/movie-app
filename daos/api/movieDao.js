const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const movieDao = {
    table: 'movie',

    findMovieDao: (res, table) => {

        const sql = `SELECT m.title, m.rating, m.runtime, m.nationality, m.yr_released, m.budget, m.gross, m.showing, m.poster,p.production, 
        GROUP_CONCAT(DISTINCT g.genre) AS genres, 
        GROUP_CONCAT(DISTINCT d.fName,' ', d.lName) AS directors, 
        GROUP_CONCAT(DISTINCT sp.streaming_platform) AS streaming_platforms, 
        GROUP_CONCAT(DISTINCT a.first_name,' ', a.last_name) AS actors
                    FROM movie m
                    LEFT JOIN production p USING (production_id)
                    LEFT JOIN movie_to_actor using (movie_id) LEFT JOIN actor a USING (actor_id)
                    LEFT JOIN movie_to_director using (movie_id) LEFT JOIN director d USING (director_id)
                    LEFT JOIN movie_to_genre using (movie_id) LEFT JOIN genre g USING (genre_id)
                    LEFT JOIN movie_to_streaming using (movie_id) LEFT JOIN streaming_platform sp USING (streaming_platform_id)
                    GROUP BY m.movie_id
                    ORDER BY m.title`

                    con.query(
                        sql,
                        (error, rows)=> {
                            queryAction(res, error, rows, table)
                        }
                    )
    }
}

module.exports = movieDao