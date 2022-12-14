import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteWorkoutsController } from './favorite-workouts.controller';

describe('FavoriteWorkoutsController', () => {
  let controller: FavoriteWorkoutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteWorkoutsController],
    }).compile();

    controller = module.get<FavoriteWorkoutsController>(FavoriteWorkoutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
