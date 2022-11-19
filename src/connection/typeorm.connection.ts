
export const config = () =>({
  port: Number(process.env.PORT),
  database: {
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      entities: ['dist/**/*/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      // migrationsTableName: 'typeorm_migrations',
      synchronize: process.env.DATABASE_SYNC, // never use TRUE in production!
      
  }
  

})


