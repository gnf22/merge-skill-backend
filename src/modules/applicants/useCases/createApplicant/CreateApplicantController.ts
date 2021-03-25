import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateApplicantUseCase } from './CreateApplicantUseCase';

export class CreateApplicantController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      biography,
      telephone,
      dateOfBirth,
      schooling,
      isWorking,
    } = request.body;

    const createApplicantUseCase = container.resolve(CreateApplicantUseCase);

    await createApplicantUseCase.execute({
      name,
      email,
      password,
      biography,
      telephone,
      dateOfBirth: new Date(dateOfBirth),
      schooling,
      isWorking,
    });

    return response.status(201).send();
  }
}
