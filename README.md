# BeezIt URL Shortener
by Joseph Aedan Marcus

<div align="center">
  <a href="https://github.com/josephaedan/beezit">
    <img src="/client/src/img/logo.png" alt="Logo" width="150" height="auto">
  </a>

  <h3 align="center">Beez It URL Shortener</h3>

  <p align="center">
    Access the Hive to shorten your URL and send a bee (shortened link) out to your friends!
  </p>
</div>


## Table of contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Development](#development)

## Features

<b>List of core features</b>

- Enter a URL into input field :white_check_mark:
- Generate random 8-character code for shortening URL :white_check_mark:
- Create a Beez to shorten the URL ✅
- Click to Copy shortened URL ✅
- Edit URL linked to Beez 🚧
- View all currently created Beez 🚧
- Deployed to live website 🚧

## Tech Stack

* [PostgreSQL](https://www.postgresql.org/)
* [Express](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)

## Setup

### Ensure that you have Node.js, npm and PostgreSQL installed.

If you do not have Node.js installed, it is recommended to install from their site [here](https://nodejs.org/en/). This will install the latest version of Node.js along with npm.

If you do not have PostgreSQL installed, download it [here](https://postgresapp.com/downloads.html).

### Clone the repository

```bash
git clone git@github.com/josephaedan/Beezit.git
```

### Install dependencies

1. To install frontend dependencies, `cd` to the /client directory and run
    ```bash
    npm install
    ```

1. To install backend dependencies, `cd` to the /server directory and run
    ```bash
    npm install
    ```

1. To create the PostgreSQL database and table, in the backend /server directory, run the following command in psql
    ```psql
    \i database.sql
    ```
    
    If your default Postgres account is not superuser `postgres`, switch to superuser by running
    ```bash
    sudo -u postgres psql
    ```

## Development

### Start server in development

1. Run Postgres app and start the server on `Port 5432`.

2. Start the local backend server on `Port 3001` by running
    ```bash
    node index
    ```

The server should now be running locally on `localhost:3001`, and the API can be reached via `localhost:3001/beez`.

The backend server must be running before starting the app.

### Start app in development

1. Start the app by running
```bash
npm run start
```

The app should now be running locally on `localhost:3000`.

The website should be now be live and connected with the backend server and database.

## Contact Me!

Joseph Aedan Marcus
* [Email](mailto:josephaedan@gmail.com)
* [LinkedIn](www.linkedin.com/in/josephaedan)
* [Github](https://github.com/Josephaedan)

Project Link: [https://github.com/josephaedan/Beezit](https://github.com/josephaedan/Beezit)
