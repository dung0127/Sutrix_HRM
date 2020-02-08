import { Module } from '@nestjs/common';
import { StaffsController } from './staffs.controller';
import { StaffsService } from './staffs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staffs } from './staffs.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Staffs])],
  controllers: [StaffsController],
  providers: [StaffsService]
})
export class StaffsModule {}
