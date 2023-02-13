import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: "postgres", host: '', port: 5432, username: '', password: '', database: '', synchronize: true, entities: ["**/*.entity.js"]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
