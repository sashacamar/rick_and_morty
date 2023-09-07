const app = require('./src/app');
const { conn } = require('./src/DB_connection')

const { PORT } = process.env;

app.listen(PORT, () => {
    conn.sync({ alter: true });
    console.log(`listening on port ${PORT}`);
});