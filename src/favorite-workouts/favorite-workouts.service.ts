/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';
import { WorkoutsEntity } from 'src/workouts/workout.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoriteWorkoutsService {
    constructor(
        private readonly workoutRepo: Repository<WorkoutsEntity>, 
        private readonly userRepo: Repository<UserEntity>
        ) {}

        
}
