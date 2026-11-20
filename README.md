# Express.js Notes & Starter Examples

A collection of small, standalone Express.js examples written while learning: routing, middleware, static pages, EJS templates, 404 handling and MongoDB with Mongoose.

## Examples

| File | Topic |
|---|---|
| `express.js` | First Express server and routes |
| `http-req-res-routingparameters.js` | Request/response and route parameters |
| `render-json-html-data.js` | Sending JSON and HTML responses |
| `renderstaticpages.js` | Serving static files from `public/` (port 2000) |
| `remove-file-extension&render-404-pages.js` | Clean URLs and a custom 404 page |
| `template-engine.js`, `dynamic-pages-with-ejs.js` | EJS templates (`views/wellcome.ejs`) |
| `middleware.js`, `middleware-concept.js` | Application-level middleware |
| `routerlevel-midelware.js` | Router-level middleware |
| `mongodb.js`, `create-read-data-from-mongodb.js` | MongoDB with Mongoose (`models/`, `db/db_connection.js`) |

Most examples listen on port **1000**.

## Tech Stack

Node.js · Express 5 · EJS · Mongoose · dotenv · nodemon

## Setup

```bash
git clone https://github.com/KahafSameer/express-js-notes-and-startup-work-.git
cd express-js-notes-and-startup-work-
npm install
```

For the MongoDB examples, copy `.env.example` to `.env` and set:

| Variable | Purpose |
|---|---|
| `MONGODB_URI` | MongoDB connection string |

## Run an example

```bash
node express.js
# or with auto-reload:
npx nodemon express.js
```

Then open http://localhost:1000 (or http://localhost:2000 for `renderstaticpages.js`).
