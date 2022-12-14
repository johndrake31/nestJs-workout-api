/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class FavoriteWorkoutsService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>
    ) { }


    //     // SELECT * FROM favoriteWorkouts as f left join workouts as w on f.workoutsId = w.id WHERE usersId = 1


    async getAll(id: number): Promise<any> {
        return await this.userRepo
            .find({
                relations: ['favoriteWorkouts'],
                where: { id }
            }
            );
    }
}