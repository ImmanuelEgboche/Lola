const db = require('../../dbConfig/init')

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



}

module.exports = Player
