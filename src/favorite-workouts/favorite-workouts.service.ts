/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';
import { WorkoutsEntity } from 'src/workouts/workout.entity';
import { IWorkout } from '../workouts/workouts.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FavoriteWorkoutsService {

    constructor(
        @InjectRepository(WorkoutsEntity)
        private readonly workoutRepo: Repository<WorkoutsEntity>,

        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>
    ) { }

    async findAllByUserId(id: number): Promise<IWorkout[]> {
        const user = await this.userRepo.findOneBy({ id })
        const results = await this.workoutRepo.createQueryBuilder('favs')
            .leftJoin('favs.favoriteWorkouts', 'favoriteWorkouts')
            .where('user.id = :id', { id: user.id })
            .getMany();
        return [...results]
    }
}
