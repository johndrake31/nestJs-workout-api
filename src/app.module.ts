import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { WorkoutsModule } from './workouts/workouts.module';
import { ExercisesController } from './exercises/exercises.controller';
import { ExercisesService } from './exercises/exercises.service';
import { ExercisesModule } from './exercises/exercises.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest-nest',
      password: 'nest-nest',
      database: 'nest-test',
      entities: [__dirname + '/**/*.entity{.ts,.js}', UserEntity],
      synchronize: true,
      autoLoadEntities: true,
      socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    }),
    UserModule,
    WorkoutsModule,
    ExercisesModule,
  ],
  controllers: [AppController, ExercisesController],
  providers: [AppService, ExercisesService],
})
export class AppModule {}
