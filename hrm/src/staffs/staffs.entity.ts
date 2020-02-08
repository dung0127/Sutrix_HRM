import {Entity, PrimaryGeneratedColumn, Column, Timestamp} from 'typeorm';


@Entity('staff')
export class Staffs {
    @PrimaryGeneratedColumn('increment')
    staffId: number;

    @Column({type:'varchar', length:255, nullable:false})
    fristName:string;

    @Column({type:'varchar', length:255, nullable:false})
    lastName:string;

    @Column({type: 'timestamp', default:0})
    dateOfBirth:Date;

    @Column({type:'varchar', length:1000})
    avatar:string;

    @Column({type:'bool', default:0})
    gender:boolean;

    @Column({type:'varchar', length:255})
    address:string;

    @Column({type:'varchar', length:255})
    mobile:string;

    @Column({type:'varchar', length:255})
    skype:string;

    @Column({type:'varchar', length:255})
    email:string;

    @Column({type: 'timestamp', default:0})
    joinDate:Date;

    @Column({type:'varchar', length:255})
    department:string;
}
