module.exports = {

    development: {
      client: 'postgresql',
      connection: {
        host: 'ec2-54-145-102-149.compute-1.amazonaws.com',
        port: 5432,
        database: 'd5smgje53v09i',
        user:     'srhgtzitxvsius',
        password: '5b42a7baacaf92e14b89047017094b0b8d5636eebce36fd7ef291a3990f6c97b',
        ssl: { rejectUnauthorized: false }
      },
      migrations: {
      },
      useNullAsDefault: true,
  
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  }