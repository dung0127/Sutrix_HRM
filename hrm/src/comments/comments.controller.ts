import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(readonly commentService: CommentsService) { }

    @Get('all_comments')
    async getAllComments() {
        return this.commentService.getAllComments();
    }

    @Get('get_comments_by_staff/:staffId')
    async getCommentsByStaffId(@Param('staffId') staffId: number) {
        return this.commentService.getCommentByStaffId(staffId);
    }

    @Post('add_new_comment')
    async addNewComment(@Body() comment: any) {
        return this.commentService.addNewComment(comment);
    }

    @Delete('delete/:commentId') // :3001/comments/delete/1
    async deleteComment (@Param('commentId') commentId: number) {
        return this.commentService.deleteComment(commentId);
    }
}
