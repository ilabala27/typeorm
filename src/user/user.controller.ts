import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Res } from "@nestjs/common";
import { ApiCreatedResponse, ApiFoundResponse, ApiOkResponse } from "@nestjs/swagger";
import { response } from "express";
import { CreateUserDto } from "src/Dto/create-userdto";
import { UserService } from "./User.service";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async findAll(@Res() response){
        try {
            const UserData = await this.userService.findAll();
            return response.status(HttpStatus.OK).json({
                message: 'All Users Data Found Successfully!!', UserData
            });
        } catch (error) {
            return response.status(error.status).json(error.response);
        };
        
    }
    @Post()
    async create(@Res() response, @Body() createUserDto: CreateUserDto){
        try {
            const User = await this.userService.create(createUserDto);
            return response.status(HttpStatus.CREATED).json({
            message: 'Employee has been created successfully',
            User,});
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: User not created!',
            error: 'Bad Request'
         });
        }
    }    

    @Patch(': id')
    async update(@Res() response, @Param('id') id: string, @Body() updateUserDto: CreateUserDto){
    try {
        const existingUser = await this.userService.Update(id, updateUserDto);
        return response.status(HttpStatus.OK).json({
    message: 'Employee has been successfully updated',
    existingUser,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
     
    @Get(': id')
    async getOne(@Res() response, @Param('id') id: string){
        try {
            const existingUser = await this.userService.getOne(id);
            return response.status(HttpStatus.OK).json({
                message: 'user found successfully', existingUser,
            })
        } catch (error) {
            return response.status(error.status).json(error.response)
            
        }
        
        
        
    };

    @Delete(':id')
    async remove(@Param('id') id: string){
        const existingCofee = await this.userService.remove(id);
        return existingCofee;
    }
    




}