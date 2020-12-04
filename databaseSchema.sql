DROP DATABASE IF EXISTS mapcourse;
CREATE DATABASE mapcourse; 
USE mapcourse; 
 
DROP TABLE course;
 
 create table location (
	locationID int auto_increment,
    name varchar(255),
    primary key(locationID)
);
 
CREATE TABLE course (
    courseID int AUTO_INCREMENT,
    title varchar(100) NOT NULL UNIQUE,
    courseDate date NOT NULL,
    locationID int NOT NULL,
    description text NOT NULL,
    trainerNames varchar(100) NOT NULL,
    attendeesInfo varchar(200) NOT NULL,
    courseDuration time NOT NULL,
    
    PRIMARY KEY(courseID),
    foreign key (locationID) references location(locationID)
);

SELECT * FROM course;

