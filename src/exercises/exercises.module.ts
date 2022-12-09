/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './exercise.entity';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';

@Module({
    imports: [TypeOrmModule.forFeature([ExerciseEntity])],
    providers: [ExercisesService],
    controllers: [ExercisesController],
})

export class ExercisesModule { }
