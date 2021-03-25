import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEnterpriseUseCase } from './CreateEnterpriseUseCase';

export class CreateEnterpriseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      description,
      telephone,
      number,
      postalCode,
    } = request.body;

    const createEnterpriseUseCase = container.resolve(CreateEnterpriseUseCase);

    await createEnterpriseUseCase.execute({
      name,
      email,
      password,
      description,
      telephone,
      number,
      postalCode,
    });

    return response.status(201).send();
  }
}
