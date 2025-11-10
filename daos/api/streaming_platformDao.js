const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const streaming_platformDao = {
    table: 'streaming_platform',

    movieByPlatform: (res, table, platform)=> {
        const sql = `SELECT m.title, sp.streaming_platform
                    FROM movie m
                    JOIN movie_to_streaming using (movie_id)
                    JOIN streaming_platform sp using (streaming_platform_id)
                    WHERE sp.streaming_platform = '${platform}'`;

            con.query(
                sql,
                (error, rows)=> {
                    queryAction(res, error, rows, table)
                }
            )
    }
}

module.exports = streaming_platformDao