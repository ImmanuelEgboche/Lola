const db = require('../dbConfig/init');

class Player{
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.score = data.score;
    };

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const playersData = await db.query(`SELECT * FROM players;`)
                const players = playersData.rows.map(d => new Player(d))
                console.log(`This is models:${players}`)
                resolve(players);
            } catch (err) {
                reject("Error retrieving players")
            }
        })
    }

    static create(username, score) {
		return new Promise(async (res, rej) => {
			
			try {
                console.log(username, score)
				let result = await db.query(
					`INSERT INTO players (username, score) VALUES ($1, $2) RETURNING *;`,
					[username, score]
				);
				
				let newPlayer = new Player(result.rows[0]);
				res(newPlayer);
			} catch (err) {
				rej(`Error creating player: ${err}`);
			}
		});
	}



}

module.exports = Player
