// Update with your config settings.

module.exports = {

  development: {
      client: 'postgresql',
      connection: {
          database: 'speed1'
      },
      debug: true
  },

  production: {
    client: 'postgres',
    connection: 'speed1'
  }

};
