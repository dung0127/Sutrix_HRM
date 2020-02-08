import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('comments')
export class Comments {
    @PrimaryGeneratedColumn('increment')
    commentId: number;

    @Column({ type: 'varchar', length: 2000, nullable: false })
    commentContent: string;

    @Column({ type: 'int'})
    staffId: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdDate: Date;
    
}