const port = process.env.APP_PORT || 5000;
const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

module.exports = {
    port,
    dbUsername,
    dbPassword
};