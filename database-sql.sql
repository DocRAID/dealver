CREATE TABLE `account` (
	`id`	char(20)	NOT NULL,
	`password`	char(20)	NULL,
	`job`	char(10)	NULL,
	`phone`	char(15)	NULL,
	`roomNumber`	char(5)	NULL,
	`nickname`	char(10)	NOT NULL,
	`sex`	char(1)	NOT NULL,
	`profile`	char(20)	NULL
);

CREATE TABLE `posts` (
	`writeId`	char(20)	NOT NULL,
	`id`	char(20)	NOT NULL,
	`write`	char(300)	NULL,
	`title`	char(20)	NULL,
	`category`	int(10)	NULL,
	`money`	int	NULL
);

