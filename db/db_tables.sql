DROP TABLE IF EXISTS players;

CREATE TABLE players (
    id serial PRIMARY KEY,
    username VARCHAR (50) NOT NULL UNIQUE,
    score INT
);

INSERT INTO players (username, score)
VALUES
('test username', 100);
