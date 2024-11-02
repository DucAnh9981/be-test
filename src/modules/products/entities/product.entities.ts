import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    MS:string;

    @Column()
    name:string;

    @Column()
    quantity:number;

    
}