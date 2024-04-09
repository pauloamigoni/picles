import { Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput> {
    async run(input: CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput> {
         throw new Error("Not Implemented")
    }
}