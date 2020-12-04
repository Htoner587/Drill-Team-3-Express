DROP DATABASE IF EXISTS mapcourse;
CREATE DATABASE mapcourse; 
USE mapcourse; 

 

CREATE TABLE course (
    courseID int AUTO_INCREMENT,
    courseName varchar(255) NOT NULL UNIQUE,
    courseDate varchar(255) NOT NULL,
    courseLocation varchar(255) NOT NULL,
    description text NOT NULL,
    courseDuration time NOT NULL,
    trainerNames varchar(100) NOT NULL,
    attendeesInfo varchar(200) NOT NULL
);

INSERT INTO course(courseName, courseDate, courseLocation, description, courseDuration, trainerNames, attendeesInfo)
VALUES
	('Chocolate making', '15/12/2020', 'Belfast', 'Learn how to make chocolate!', '02:00:00', 'Greg Trainer-Person', 'Everyone from the digital services capability'),
    ('Tree decorating', '02/12/2020', 'Gdansk', '02:00:00', 'Greg Trainer-Person', 'Everyone working in the NHS track and trace app'),
    ('Slay riding', '05/02/2021','London', '02:00:00', 'Greg Trainer-Person', 'Optional activity open to all'),
    ('Chimney sliding', '24/12/2020','Birmingham', '02:00:00', 'Santa Claus', 'Optional activity for those who have not recieved their santa licences'),
    ('Chestnut roasting', '28/12/2020','Derry-Londonderry', '02:00:00', 'Greg Trainer-Person', 'Optional activity open to all'),
    ('Snowman building', '15/01/2021','Dublin', '02:00:00', 'Greg Trainer-Person', 'Optional activity open to all');


SELECT * FROM course;