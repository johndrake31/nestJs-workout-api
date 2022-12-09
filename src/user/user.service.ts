/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDTO } from './dto/create-users.dto';
import { UpdateUserDTO } from './dto/update-users.dto';
import { UserEntity } from './user.entity';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
    ) { }

    async create(newUser: CreateUserDTO): Promise<IUser | string> {
        const newUserObject:any = {...newUser}
        const existingUser = await this.userRepo.findOneBy({email: newUser.email});
        if (newUserObject.id || existingUser) {
            return  "could not create new user";
        }
        return await this.userRepo.save(newUser);
    }

    async findOneById(id: number): Promise<IUser> {
        return await this.userRepo.findOneBy({ id })
    }

    async findAll(): Promise<IUser[]> {
        return await this.userRepo.find();
    }

    async update(id: number, user: UpdateUserDTO): Promise<UpdateResult> {
        return await this.userRepo.update(id, user)
    }
    async deleteOneById(id: number): Promise<DeleteResult> {
        return await this.userRepo.delete(id);
    }

}
