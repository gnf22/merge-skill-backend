import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

export interface IUsersRepository {
  create(data: ICreateUserDTO): User;
  findByEmail(email: string): Promise<User>;
}
