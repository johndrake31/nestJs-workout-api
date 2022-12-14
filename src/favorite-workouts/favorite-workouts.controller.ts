/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { IWorkout } from 'src/workouts/workouts.interface';

import { FavoriteWorkoutsService } from './favorite-workouts.service';

@Controller('favoriteworkouts')
export class FavoriteWorkoutsController {
    constructor( private readonly favsServ: FavoriteWorkoutsService ){}
    @Get()
    getHello(): string {
        return 'Hello World!';
      }
      
    @Get(':id')
    async findOne(@Param('id') id): Promise<IWorkout[]>{
        const results = await this.favsServ.findAllByUserId(+id);
        return [...results];
    }
}
