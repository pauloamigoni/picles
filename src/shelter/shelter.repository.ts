import { InjectModel } from "@nestjs/mongoose";
import { Shelter } from "./schemas/shelter.schemas";
import { Model } from "mongoose";
import IShelterRepository from "./interfaces/shelter.repository.interface";
import { Injectable } from "@nestjs/common";
import UpdateShelterDetailsUseCaseInput from "./usecases/dtos/update.shelter.details.usecase.input";

@Injectable()
export class ShelterRepository implements IShelterRepository {
    constructor(
        @InjectModel(Shelter.name)
        private readonly shelterModel: Model<Shelter>
    ){}

    async get(): Promise<Shelter>{
        return await this.shelterModel.findOne()
    }

  async update(data: Partial<Shelter>): Promise<void> {
     await this.shelterModel.updateOne(null, {
        ... data, updatedAt: new Date()
        })
 }
}