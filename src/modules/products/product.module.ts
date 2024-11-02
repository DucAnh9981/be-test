import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from "src/modules/products/product.controll";
import { ProductsService } from "src/modules/products/product.service";
import { Product } from './entities/product.entities';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers:[ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {};