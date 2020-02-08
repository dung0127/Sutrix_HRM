import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './comments.entity';

@Injectable()
export class CommentsService {
    constructor(@InjectRepository(Comments) readonly commentService:Repository<Comments>){}

    async getAllComments() {
        return this.commentService.find();
    }

    async getCommentByStaffId(staffId: number) {
        return this.commentService.find({staffId});
    }
    async addNewComment(comment: any) {
        return this.commentService.save(comment);
    }

    async deleteComment (commentId: number) {
        return this.commentService.delete(commentId);
    }
   
}
    



