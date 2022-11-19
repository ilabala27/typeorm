import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/Dto/create-userdto";
// import { UpdateUserDto } from "src/Dto/update-userdto";
import { User } from "src/entity/User.Entity";
import { Repository } from "typeorm";



@Injectable()
export class UserService {
    clientRepository: any;
    constructor(
        @InjectRepository(User) private readonly  userRepository: Repository<User>)
        {}

        findAll(){
            return this.userRepository.find();
        };

        
        async create(@Body() createUserDto: CreateUserDto): Promise<User> {
            const user =  await this.userRepository.create(createUserDto);
            return this.userRepository.save(user)
        };

       async Update(id: string, updateUserDto: CreateUserDto){
       return await this.userRepository.preload({id: id, ...updateUserDto});
        

       }
       
        async getOne( id: string): Promise<User>{
            const user = await  this.userRepository.findOne({
                where:{id: id},
               
            });
            if(!user)
            {
                throw new NotFoundException('id not found')
            }
    
            return user;
        };

        async remove (id: string){
            const user = await this.userRepository.delete(id);
            return user;
        };

       
}




