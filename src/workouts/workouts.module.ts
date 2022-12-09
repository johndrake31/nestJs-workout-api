import { Module } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { WorkoutsController } from './workouts.controller';
import { WorkoutsEntity } from './workout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutsEntity])],
  providers: [WorkoutsService],
  controllers: [WorkoutsController],
})
export class WorkoutsModule {}
