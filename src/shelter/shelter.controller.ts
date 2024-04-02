import { Controller, Get, Post } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';

@Controller('shelter')
export class ShelterController {
  @Get()
  getShelterDetails(): GetShelterDetailsUseCaseOutput {
    return new GetShelterDetailsUseCaseOutput({
        shelterName: 'Luz dos Bichos',
        shelterEmail: 'luzdb@gmail.com',
        shelterPhone: '19992250066',
        shelterWhatsApp: '19992250066',
        updatedAt: new Date(),
        createdAt: new Date()
    })
  }
}
