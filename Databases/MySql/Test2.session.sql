-- Clauses -> Where
-- Logical Operators -> AND, OR, BETWEEN,  IN, NOT

USE instagram;
SHOW tables;

select * from user
WHERE Followers >=200;

SELECT id,name,age,Followers from user
where age>19 AND Followers >=200

select * from user
where age BETWEEN 17 AND 19;

select * from user
where email in ("rahul.ind@yahoo.in", "sophia89@gmail.com", "priya.sharma@yahoo.in");

select name, age, email from user
where age in (18,19);

select name, age, email from user
where age not in (18,19);


-- Clause -> Limit (works like head from python )

SELECT id,name,age,Followers from user
where age>18
LIMIT 2;

-- Clause -> Order by (used to sort data in ASC or DESC)

SELECT id,name,age,Following from user
where age>19 ORDER BY Following DESC;


-- Aggregate Functions -> (COUNT(), MAX(), MIN(), SUM(), AVG())

Use college;
show tables;

ALTER TABLE student ADD COLUMN marks INT;

INSERT INTO student (roll_no, name, age, marks) VALUES
(104, 'Aarav Sharma', 20, 85),
(105, 'Priya Mehta', 22, 92),
(106, 'Rohan Verma', 19, 78),
(107, 'Sneha Patel', 21, 88),
(108, 'Karan Singh', 23, 74),
(109, 'Anjali Gupta', 20, 95),
(110, 'Vikram Nair', 22, 67),
(111, 'Riya Joshi', 18, 82),
(112, 'Arjun Rao', 21, 90),
(113, 'Pooja Desai', 19, 71);

select * from student;

Delete from student
where marks is NULL;

select name, marks from student
where marks = (select max(marks) from student);

select name, marks from student
where marks >= (select avg(marks) from student);

select name, marks from student
where marks = (select min(marks) from student);

select  count(marks) from student
where marks > 80;

select  sum(marks) from student
where marks > 80;


-- Clause -> Group BY

select age, count(roll_no) from student
GROUP BY age Order by age asc;

select * from student;

-- Clause -> Having apply conditions on group)

select age , max(marks) from student
GROUP BY age
Having max(marks) > 90;


-- General order ->
--          Select columns
--          from table
--          where condition
--          GROUP BY columns
--          Having condition
--          Order by columns ASC;


use instagram;
show tables;

select * from user;

update user
set Followers = 600
where age = 18;

delete from user 
where age = 31;

Alter table user
ADD column city varchar(30) default "delhi";

Alter table user
drop column city;

-- To change the name of the table
Alter table users
rename to user; 

-- Modifying

ALter table user 
change column city user_city varchar(30);

Alter table user
modify user_city varchar(35) default "HR";

update user
set user_city = "HR"
where user_city = "delhi";


create table fkers(
    id int primary key,
    name varchar(30),
    age int,
    city varchar(40),
    constraint  check (age >=18)
);

insert into fkers (id, name, age, city)
values
(1, 'Rohan Mehta', 22, 'Mumbai'),
(2, 'Priya Singh', 25, 'Delhi'),
(3, 'Arjun Rao', 30, 'Bangalore'),
(4, 'Sneha Patel', 28, 'Ahmedabad'),
(5, 'Karan Verma', 21, 'Jaipur'),
(6, 'Anjali Gupta', 35, 'Lucknow'),
(7, 'Vikram Nair', 19, 'Chennai'),
(8, 'Riya Joshi', 24, 'Pune'),
(9, 'Aarav Sharma', 27, 'Kolkata'),
(10, 'Pooja Desai', 32, 'Hyderabad');

select * from fkers;

truncate fkers;