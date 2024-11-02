import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDTO{
    @IsString({message:'Invalid character'})
    MS:string;

    @IsNotEmpty({message:'Not empty'})
    name:string;

    @IsNumber({},{message:'Only enter numbers'})
    quantity:number;
}