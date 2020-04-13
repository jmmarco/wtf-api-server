# REST API for the World Texting Foundation, also known as WTF.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
Your system needs a fairly recent version of [Node](https://nodejs.org/en/). 

### Installing
If that's all good, then install all necessary dependencies inside the target folder using:
```
npm install
```

## Available enpoints
- `**GET /acronym?from=50&limit=10&search=:search**`
- `**GET /acronym/:acronym**`
- `**GET /random/:count?**`
- `**POST /acronym**`
- `**PUT /acronym/:acronym**`
- `**DELETE /acronym/:acronym:**`

## Built with
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Sqlite](https://sqlite.org/)
- [Babel](https://babeljs.io/)

## Author
 - Juan Marco

## License
See [LICENSE.md](LICENSE.md)

## Bugs
PR's are welcomed! Open a PR and we'll take it from there.


