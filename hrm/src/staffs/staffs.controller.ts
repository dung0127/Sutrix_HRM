import { Controller, Get, Param, Body, Post, Put } from '@nestjs/common';
import { StaffsService } from './staffs.service';

@Controller('staffs')
export class StaffsController {
    constructor(readonly staffService: StaffsService){ }

    @Get('get_all')
    getAll(){
        return this.staffService.getAllStaffs();
    }

    @Get('get_staff_detail/:staffId')
    getDetail(@Param('staffId') staffId:number){
        return this.staffService.getStaffDetail(staffId);
    }

    @Post('add_new')
    async addNewPost(@Body() data:any): Promise<any>{
        return await this.staffService.addNewStaff(data);
    }

    @Get('get_staff_by_department/:department')
    async getStaffsByDepartment(@Param('department') department: string) {
        return this.staffService.getStaffsByDepartment(department);
    }

    @Put('edit/:staffId') // :3000/staff/edit/1
    async updatePost (@Param('staffId') staffId: number, @Body() staff:any) {
        return await this.staffService.updateStaff(staffId, staff);
    }

}

