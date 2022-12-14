/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { IUser } from '../user/user.interface';

import { FavoriteWorkoutsService } from './favorite-workouts.service';

@Controller('favworkouts')
export class FavoriteWorkoutsController {
    constructor( private readonly favsServ: FavoriteWorkoutsService ){}
    @Get()
    getHello(): string {
        return 'Hello World!';
      }

    @Get(':id')
    async findAllUserFavs(@Param('id') id): Promise<IUser>{
        const results = await this.favsServ.getAll(+id);
        return results
    }
}
