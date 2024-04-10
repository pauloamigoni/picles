import { Pet } from "../schemas/pet.schema"

export default interface IPetRepository {
    create(data: Partial<Pet>): Promise<Pet>
    update(data: Partial<Pet>): Promise<void>
    getById(id: string): Promise<Pet>
}