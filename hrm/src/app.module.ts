import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffsModule } from './staffs/staffs.module';
import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './comments/comments.module';

const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  port: 3306,
  host: 'localhost',
  username: 'root',
  password: 'abc',
  database: 'sutrix',
  synchronize: true,
  entities: ['./src/**/*.entity.ts'],
};
@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), StaffsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
