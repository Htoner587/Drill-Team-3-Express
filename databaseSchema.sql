DROP DATABASE IF EXISTS mapcourse;
CREATE DATABASE mapcourse; 
USE mapcourse; 

 
CREATE TABLE course (
    courseID int AUTO_INCREMENT,
    courseName varchar(255) NOT NULL UNIQUE,
    courseDate varchar(255) NOT NULL,
    courseLocation varchar(255) NOT NULL,
    PRIMARY KEY(courseID)
);

INSERT INTO course(courseName, courseDate, courseLocation)
VALUES
	('Chocolate making', '15/12/2020', 'Belfast'),
    ('Tree decorating', '02/12/2020', 'Gdansk'),
    ('Slay riding', '05/02/2021','London'),
    ('Chimney sliding', '24/12/2020','Birmingham'),
    ('Chestnut roasting', '28/12/2020','Derry-Londonderry'),
    ('Snowman building', '15/01/2021','Dublin');


SELECT * FROM course;

