import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staffs } from './staffs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StaffsService {
    constructor(@InjectRepository(Staffs) readonly staffService:Repository<Staffs>){}

    // async getAllstaffs(limit:number, offset:number) : Promise<staffs[]>{
    //     const staffs = await this.staffService.find({
    //         skip: offset,
    //         take: limit,
    //     });

    async getAllStaffs(): Promise<Staffs[]>{
        const staffs = await this.staffService.find();
        return staffs;
    }

    async getStaffDetail(staffId: number){
        return this.staffService.findOne(staffId);
    }

    async addNewStaff(staff: any) {
        return await this.staffService.save(staff);
    }

    async getStaffsByDepartment(department: string) {
        return this.staffService.find({department});
    }

    async updateStaff (staffId: number, staff: any) {
        // kiem tra staff ton tai trong Db chua
        //const staffItem = this.staffService.findOne(staffId);
        const staffItem = await this.getStaffDetail(staffId);
        if(staffItem) {
            //update gia tri moi, neu k co giu nguyen
            Object.assign(staffItem, staff);
            await this.staffService.update(staffId, staffItem);
            await this.staffService.save(staffItem);
        }
        return staffItem;
    }
}
