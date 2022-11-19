import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/User.Entity";
import { UserController } from "./user.controller";
import { UserService } from "./User.service";

@Module({
    imports: [TypeOrmModule.forFeature([ User])],
    controllers:[UserController],
    providers: [UserService]
})
export class UserModule {}
