import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './connection/database.config';
// import { TypeOrmConfigService } from './connection/typeorm.connection';
import { config } from './connection/typeorm.connection';
import { UserModule } from './user/user.module';
// import { envSelector } from './common/envs/';
// const envFilePath: string = envSelector(`./src/common/envs`);




@Module({
  imports: [
    ConfigModule.forRoot({
      load:[config],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      // useClass: TypeOrmConfigService
      useClass: DatabaseConfig
    }),UserModule
  ],  

  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}    












