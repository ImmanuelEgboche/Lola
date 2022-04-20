const db = require('../dbConfig/init')

class Player{
    constructor(data) {
        this.id = data.id;
        this.player = data.player;
        this.score = data.score;
    };

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const playersData = await db.query(`SELECT * FROM players;`)
                const players = playersData.rows.map(d => new Player(d))
                resolve(players);
            } catch (err) {
                reject("Error retrieving players")
            }
        })
    }

    static create({ username}) {
		return new Promise(async (res, rej) => {
			
			try {
				let result = await db.query(
					`INSERT INTO players (username, score) VALUES ($1, $2) RETURNING *;`,
					[username, score]
				);
				
				let player = new Player(result.rows[0]);
				res(player);
			} catch (err) {
				rej(`Error creating player: ${err}`);
			}
		});
	}

    // static update(username, score) {
    //     return new Promise(async (res, rej) => {
    //         try {
    //             let updateScore = await db.query(
    //                 "UPDATE players SET score = $2 WHERE username = $1 RETURNING *;",
    //                 [username, score]
    //             );
    //             let newScore = new Player(updateScore.rows[0]);
    //             res(newScore);
    //         } catch {
    //             rej("Error updating score");
    //         }
    //         })
    //     }

    }




module.exports = Player
