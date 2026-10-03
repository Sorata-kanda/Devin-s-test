create database if not exists college;
drop database if exists tempo;
use college;

create table student(
	roll_no int,
    name varchar(30),
    age int
);

insert into student 
values
(101, "adam", 19),
(102, "mohan", 20),
(103, "shimy", 18);

select * from student;
show databases;
show tables;



create database instagram;
use instagram;
create table user(
	id int primary key,
    age int,
    name varchar(30) not null,
    email varchar(100) unique,
    Followers int default 0,
    Following int,
    constraint age_check check (age>=18)
);

create table posts(
	id int primary key,
    content varchar(100),
    user_id int,
    foreign key (user_id) references user(id)
);

insert into posts
(id,content,user_id)
values
(101,"Hello_World",3),
(102,"BYE BYE", 1),
(103,"Hello Rahul",3);

insert into user
(id,age,name,email,Followers,Following)
values
(1,18,"adam","adam@yahoo.in",123,145),
(2, 22, 'sophia', 'sophia89@gmail.com', 450, 310),
(3, 19, 'rahul', 'rahul.ind@yahoo.in', 890, 620),
(4, 25, 'emily', 'emily_w@outlook.com', 290,1250),
(5, 18, 'liam', 'liam_k@gmail.com', 67, 189),
(6, 31, 'priya', 'priya.sharma@yahoo.in', 3420, 950);

select id,name,Followers from user;

select distinct user_id from posts;

use college;
use sakila;
show tables;
SELECT * FROM city;

use world;



