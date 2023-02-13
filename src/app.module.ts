import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: "postgres", host: 'psql01.mikr.us', port: 5432, username: 'j436', password: 'C537_ff3629', database: 'db_j436', synchronize: true, entities: ["**/*.entity.js"]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
