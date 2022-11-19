import { CreateUserDto } from "./create-userdto";
import {PartialType} from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto){}