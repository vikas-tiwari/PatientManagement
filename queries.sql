create table patient_home (id INT AUTO_INCREMENT PRIMARY KEY,fname varchar(30),mname varchar(30),lname varchar(30), address varchar(200),dob DATE, phone varchar(20), gender char(1),disease varchar(100));


//Insert query
INSERT INTO `patient_home`(`id`, `name`, `address`, `dob`, `phone`, `gender`, `disease`) VALUES (1,'Vikas', 'MiraRoad','1992-07-28','7208514937','M','Nothing I am fit')
INSERT INTO `patient_home` (`id`, `name`, `address`, `dob`, `phone`, `gender`, `disease`) VALUES (NULL, 'Vivek', 'Mira Road', '2018-06-13', '9869910155', 'M', 'Nothing');

create table donations_details (id INT AUTO_INCREMENT PRIMARY KEY,firstname varchar(30),middlename varchar(30),lastname varchar(30),
                                     address varchar(200),dod DATE, phone varchar(20), gender char(1), amount varchar(20));
