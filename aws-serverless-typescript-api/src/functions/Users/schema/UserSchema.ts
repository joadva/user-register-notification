import { UserInterface } from "../interface/UserInterface";
import {
    IsEmail,
    IsNotEmpty,
    IsString,
} from "class-validator";

class UserSchema implements UserInterface {

    @IsNotEmpty({ message: "La dirección es requerida" })
    @IsString({ message: "La dirección debe ser un texto" })
    address: string;

    @IsNotEmpty({ message: "El nombre es requerido" })
    @IsString({ message: "El nombre debe ser un texto" })
    first_name: string;

    @IsNotEmpty({ message: "El apellido es requerido" })
    @IsString({ message: "El apellido debe ser un texto" })
    last_name: string;

    @IsNotEmpty({ message: "El correo electronico es requerido" })
    @IsEmail({}, { message: "Debe colocar un email correcto" })
    email: string;

    @IsNotEmpty({ message: "La edad es requerida" })
    age: number;
}

export default UserSchema;