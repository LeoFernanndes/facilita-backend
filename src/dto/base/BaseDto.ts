import {ValidationError} from "class-validator";

export abstract class BaseDto {

    abstract validateDto(dto: BaseDto): ValidationError[]
}