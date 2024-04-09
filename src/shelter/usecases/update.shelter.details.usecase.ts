import { IUseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailsUseCaseInput from "./dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "./dtos/update.shelter.details.usecase.output";
import { Inject } from "@nestjs/common";
import ShelterTokens from "../shelter.tokens";
import IShelterRepository from "../interfaces/shelter.repository.interface";

export default class UpdateShelterDetailsUsecase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>
{
    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: IShelterRepository
    ){}

    async run(input: UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseOutput> {
            await this.shelterRepository.update(input)

            const shelter = await this.shelterRepository.get()
            return new UpdateShelterDetailsUseCaseOutput({
                name: shelter.name,
                whatsapp: shelter.whatsApp,
                email: shelter.email,
                phone: shelter.phone,
                createdAt: shelter.createdAt,
                updatedAt: shelter.updatedAt
            })
        }
    }