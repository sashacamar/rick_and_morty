const app = require('./src/app');
const { conn } = require('./src/DB_connection')

const PORT = 3001;

app.listen(PORT, () => {
    conn.sync({ force: true });
    console.log(`listening on port ${PORT}`);
});