CREATE DATABASE beezit;

\c beezit

CREATE TABLE beez(
    url_id varchar(8) PRIMARY KEY,
    link varchar(65535)
);