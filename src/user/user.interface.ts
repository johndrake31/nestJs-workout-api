import { IWorkout } from 'src/workouts/workouts.interface';
import { WorkoutsEntity } from '../workouts/workout.entity';

/* eslint-disable prettier/prettier */
export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password:string;
    workouts: IWorkout[];
    favoriteWorkouts?: IWorkout[];
}
