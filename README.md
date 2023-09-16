# EverSoClever-Lush-ipTeam-1-server
Industry Project BrainStation 

## The challenge
LUSH: How might we craft an open-source innovative shopping experience that adapts to the needs of an ever-evolving market, while leading by example with our digital ethics?

## Requirements
- github.com/christopher-leggatt/lush-industry-project-team-1-client installed and running: 
- An existing database on mySQL for the purpose of this app

## Packages
KNEX MYSQL EXPRESS CORS DOTENV UUID

## Local Installation
1. Clone project to local machine

```bash
git clone git@github.com:gabrielabl/EversSoClever-Lush-ipTeam-1-server.git
```
2. Move to UrbanFarmer-server folder

```bash
cd EversSoClever-Lush-ipTeam-1-server
```

3. Install node modules

```bash
npm i 
```
3. Rename .env.sample file

```bash
mv .env.sample .env
```
  
5. Update environment variable to local server

- `CORS_ORIGIN=<Include the localhost for the urbanfarmer-client>`
- `PORT=<include a free port>`
- `DB_LOCAL_DBNAME=<mySQL database name>`
- `DB_LOCAL_USER=<mySQL your username>`
- `DB_LOCAL_PASSWORD=<mySQL password>`
-`DB_LOCAL_HOST=<mySQL localhost>`

6. Database migration

```bash
npm run migrate
```

6. Populate database

```bash
npm run seed
```

6. Run application

```bash
node server.js
```


