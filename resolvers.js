const queries = require('./resolvers/query');
const sessions = require('./resolvers/session');

module.exports = {
    Query: queries,
    Session: sessions,
}