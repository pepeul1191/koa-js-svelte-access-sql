-- migrate:up

CREATE TABLE roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(40) NOT NULL,
  created DATETIME NOT NULL,
  updated DATETIME NOT NULL,
  system_id INTEGER NOT NULL,
  FOREIGN KEY(system_id) REFERENCES systems(id)
);

-- migrate:down

DROP TABLE roles;