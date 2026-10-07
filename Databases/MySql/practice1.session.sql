CREATE DATABASE IF NOT EXISTS LPU;

use lpu;
drop table teacher;
CREATE table IF NOT EXISTS teacher(
    id int primary key,
    name varchar(30),
    subject varchar(40),
    salary int
)

insert into teacher (id,name, subject,salary)
values
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * from teacher;

SELECT name,salary from teacher
where salary > 55000;

Alter TABLE teacher 
change column salary ctc int;

update teacher
set ctc = (((ctc/100)*25)+ctc);

UPDATE teacher
SET ctc = ctc * 4;

Alter table teacher
Add column city varchar(40) default "Gurugram";

Alter table teacher
drop column ctc; 

-------------------------------------------




CREATE TABLE student(
    roll_no int primary key,
    name varchar(30),
    city varchar(30),
    marks int
);

INSERT into student 
(roll_no, name, city, marks)
values
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * from student;

SELECT name,marks from student
where marks > 75;

SELECT city from student
GROUP BY(city);

SELECT max(marks),city from student
GROUP BY city;

SELECT avg(marks) from student;

alter TABLE student
add column grade varchar(2);

UPDATE  student
set grade = "O"
where marks >= 80

UPDATE  student
set grade = "A"
where marks >= 70 and marks <80

UPDATE  student
set grade = "B"
where marks >=60 and marks < 70