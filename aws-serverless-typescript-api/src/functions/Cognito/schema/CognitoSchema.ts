import { CognitoRegisterInterface } from "../interface/CognitoRegisterInterface";
import {
    IsEmail,
    IsNotEmpty,
    IsString,
} from "class-validator";

class CognitoSchema implements CognitoRegisterInterface {


    @IsNotEmpty({ message: "El correo electronico es requerido" })
    @IsEmail({}, { message: "Debe colocar un email correcto" })
    email: string;

    @IsNotEmpty({ message: "La contraseña es requerida" })
    @IsString({ message: "La contraseña debe ser un texto" })
    password: string;
}

export default CognitoSchema;