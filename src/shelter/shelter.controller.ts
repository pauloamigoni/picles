import { Controller, Get, Inject, Post } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';
import { IUseCase } from 'src/domain/iusecase.interface';
import ShelterTokens from './shelter.tokens';

@Controller('shelter')
export class ShelterController {
  @Inject(ShelterTokens.getShelterDetailsUseCase)
  private readonly getShelterDetailsUseCase: IUseCase<
    null,
    GetShelterDetailsUseCaseOutput
  >;

  @Get()
  async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput> {
    return await this.getShelterDetailsUseCase.run(null);
  }
}
