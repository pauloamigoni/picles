import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length, NotContains } from "class-validator"

export default class UpdateShelterControllerInput {

  @IsString()
  @IsNotEmpty()
  @NotContains(" ")
  name: string
  @IsString()
  @Length(10,11)
  @IsNotEmpty()
  whatsapp: string
  @IsString()
  @IsNumberString()
  @IsNotEmpty()
  phone: string
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string
}
function IsAlphaNUmereic(): (target: UpdateShelterControllerInput, propertyKey: "name") => void {
  throw new Error("Function not implemented.")
}

