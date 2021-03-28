import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  create({ email, password, isEnterprise }: ICreateUserDTO): User {
    const user = this.repository.create({
      email,
      password,
      isEnterprise,
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ where: { email } });

    return user;
  }
}
