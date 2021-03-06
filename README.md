<!-- @format -->

# Module13-E-commerce-Backend

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Questions](#questions)

## Installation

`npm init`

`npm install mysql2`

`npm install sequelize`

`npm install dotenv`

## Usage

Run the following command at the root of your project and answer the prompted questions:

`mysql -u root -p`

Enter PW when promted

`source db/schema.sql`

`quit`

`npm run seed`

`npm start`

## Demo

[link](https://drive.google.com/file/d/1T4d_hfGYENGScPcj6yNhe513d9nTrt1P/view)
![START with the Category GET, GET by ID, POST, PUT and DELETE](./demo/Start%20and%20Category%20GET%20POST%20PUT%20and%20DELETE.gif)

[link](https://drive.google.com/file/d/1taCZEMnWN-e7Cruvr67o_82cTyVeibfo/view)
![Product GET, Get by ID, POST, PUT and DELETE](./demo/product%20GET%20POST%20PUT%20and%20DELETE.gif)

[link](https://drive.google.com/file/d/1FPIfd93YRj0-YW_Nfs6PJXHZ1Kp7t3TS/view)
![tags GET, GEt by ID, POST, PUT and DELETE](./demo/Tags%20GET%20POST%20PUT%20and%20DELETE.gif)

## Questions

?????? Contact me with any questions: [email](mailto:amartinezjr7@gmail.com) , [GitHub](https://github.com/amartinezjr7)<br />
