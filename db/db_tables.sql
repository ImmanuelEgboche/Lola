DROP TABLE IF EXISTS players

CREATE TABLE players (
    player_id serial PRIMARY KEY,
    username VARCHAR (50) NOT NULL UNIQUE,
    score INT,
)
