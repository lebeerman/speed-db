// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres:///speed1'
  },

  production: { 
    client: 'pg', 
    connection: process.env.DATABASE_URL 
  }
};
