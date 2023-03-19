import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    
    @PrimaryGeneratedColumn('increment')//เพิ่ม field
    id:number;
    

    @Column({nullable:true})
    title:string;

    @Column({nullable:true})
    username:string;

    @Column({nullable:true})
    status:string;
    

}
