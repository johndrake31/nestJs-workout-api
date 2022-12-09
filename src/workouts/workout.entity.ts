/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { ExerciseEntity } from 'src/exercises/exercise.entity';

@Injectable()
@Entity({ name: 'workouts' })
export class WorkoutsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250 })
  mainTitle: string;

  @Column({ type: 'varchar', length: 250 })
  discriptionShort?: string;

  @Column({ type: 'varchar', length: 250 })
  discriptionExtra?: string;

  @Column('simple-array', {  nullable: true })
  weekDuration: number[];

  @Column({ type: 'int' })
  restBreakSecs: number;

  @Column('simple-array', {  nullable: true })
  daysPerWeek?: number[];

  @Column({ type: 'varchar', length: 250, nullable: true })
  imgUrl?: string;

  @OneToMany(
    (type) => ExerciseEntity,
    (exercisesEntity) => exercisesEntity.workout,
    { cascade: ['insert', 'update'], onDelete: 'CASCADE' },
  )
  @JoinColumn()
  exercises: ExerciseEntity[];
  

  @ManyToOne((type) => UserEntity, (userEntity) => userEntity.workouts, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;
}
