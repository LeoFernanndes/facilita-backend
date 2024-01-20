import {IsEmail, ValidationError} from "class-validator";
import {BaseDto} from "@/src/dto/base/BaseDto";


export class UserDto {
    id: string;
    name: string;
    @IsEmail()
    email: string;
    telephone: string;
}