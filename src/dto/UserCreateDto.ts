import {UserDto} from "@/src/dto/UserDto";
import {IsNotEmpty} from "class-validator";

export class UserCreateDto extends UserDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    telephone;
}