import { IUseCase } from "src/domain/iusecase.interface";
import GetPetsUseCaseInput from "../dtos/get.pets.usecase.input";
import GetPetsUseCaseOutput from "../dtos/get.pets.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import IPetRepository from "../interfaces/pet.repository.interface";
import AppTokens from "src/app.token";
import IFileService from "src/interface/file.service.interface";
import PetTokens from "../pet.tokens";

@Injectable()
export default class GetPetsUseCase implements IUseCase<GetPetsUseCaseInput, GetPetsUseCaseOutput> {
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository,

        @Inject(AppTokens.fileService)
        private readonly fileService: IFileService

    ) { }
    run(input: GetPetsUseCaseInput): Promise<GetPetsUseCaseOutput> {
        throw new Error("Method not implemented.");
    }

 }