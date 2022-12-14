import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { WorkoutsEntity } from 'src/workouts/workout.entity';

@Injectable()
@Entity({ name: 'exercises' })
export class ExerciseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250 })
  title: string;

  @Column('simple-array')
  sets: number[];
  @Column('simple-array')
  reps: number[];

  @Column({ type: 'int', nullable: true })
  weight: number;

  @Column({ type: 'tinyint', nullable: true })
  timed: boolean;

  @Column({ type: 'tinyint', nullable: true })
  metric: boolean;

  @Column({ type: 'int', nullable: true })
  timer: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  notes: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  uri: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  imgUrl: string;

  @ManyToOne(
    (type) => WorkoutsEntity,
    (workoutsEntity) => workoutsEntity.exercises,
    {
      onDelete: 'CASCADE',
    },
  )
  workout: WorkoutsEntity;
}
