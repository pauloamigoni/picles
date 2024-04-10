import { CustomError } from "./custo.error";

export default class PetNotFoundError extends CustomError{
    constructor() {
        super("Pet not found", "0001");
    }
}