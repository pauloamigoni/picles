import { IUseCase } from "src/domain/iusecase.interface";
import GetPetByIdUseCaseInput from "./dtos/get.pet.by.id.usecase.input";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository.interface";
import GetPetByIdUseCaseOutput from "./dtos/get.pet.by.id.usecase.output";
import { Pet } from "../schemas/pet.schema";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import AppTokens from "src/app.token";
import IFileService from "src/interface/file.service.interface";

@Injectable()
export default class GetPetByIdUseCase implements IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseInput> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository,

        @Inject(AppTokens.fileService)
        private readonly fileService: IFileService
    ) {     
    }
    async run(input: GetPetByIdUseCaseInput): Promise<GetPetByIdUseCaseInput> {
       const pet = await this.getPetById(input.id)

       if(pet === null){
        throw new PetNotFoundError()
       }

       const petPhoto = !!pet.photo ? (await this.fileService.readFile(pet.photo)).toString('base64') : null

       return new GetPetByIdUseCaseOutput({
           id: pet._id,
           name: pet.name,
           type: pet.type,
           size: pet.size,
           gender: pet.gender,
           bio: pet.bio,
           photo: petPhoto,
           createdAt: pet.createdAt,
           updatedAt: pet.updatedAt
       })
    }

    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }
}