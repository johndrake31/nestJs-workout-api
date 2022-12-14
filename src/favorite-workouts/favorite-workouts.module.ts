/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { WorkoutsEntity } from 'src/workouts/workout.entity';
import { FavoriteWorkoutsController } from './favorite-workouts.controller';
import { FavoriteWorkoutsService } from './favorite-workouts.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutsEntity, UserEntity])],
  controllers: [FavoriteWorkoutsController],
  providers: [FavoriteWorkoutsService]
})
export class FavoriteWorkoutsModule {}
