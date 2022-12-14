import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteWorkoutsService } from './favorite-workouts.service';

describe('FavoriteWorkoutsService', () => {
  let service: FavoriteWorkoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteWorkoutsService],
    }).compile();

    service = module.get<FavoriteWorkoutsService>(FavoriteWorkoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
