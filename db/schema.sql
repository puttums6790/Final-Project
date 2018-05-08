CREATE DATABASE IF NOT EXISTS relaxdb;
USE relaxdb;

-- Create the tables
CREATE TABLE user (
    userID int NOT NULL AUTO_INCREMENT,
    FirstName varchar(255) NOT NULL,
    LastName varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE category (
    Beach varchar(255) NOT NULL,
    Aquatic varchar(255) NOT NULL,
    Sports Equipment varchar(255) NOT NULL,
    Hobby Supplies varchar(255) NOT NULL,
    Trails varchar(255) NOT NULL,
    Other varchar(255) NOT NULL
);

CREATE TABLE claim (
    Available BOOL DEFAULT true,
    Reserved BOOL DEFAULT false,
    Received BOOL DEFAULT false
);

CREATE TABLE describe (
    DescribeItem varchar(255) NOT NULL
);

CREATE TABLE exchangeLocation (
    Address1 varchar(255) NOT NULL,
    Address2 varchar(255) NOT NULL,
    City varchar(255) NOT NULL,
    AddressState varchar(255) NOT NULL,
    ZipCode int NOT NULL,
    LastName varchar(255) NOT NULL
);

