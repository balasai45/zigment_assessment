import {
    ArgumentMetadata,
    BadRequestException,
    Injectable,
    PipeTransform,
  } from '@nestjs/common';
  import { plainToInstance } from 'class-transformer';
  import { validate } from 'class-validator';
  
  @Injectable()
  export class ValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
      const { metatype } = metadata;
  
      // If no validation metadata is provided, return the value as is
      if (!metatype || !this.toValidate(metatype)) {
        return value;
      }
  
      // Transform plain object to class instance
      const object = plainToInstance(metatype, value);
  
      // Perform validation
      const errors = await validate(object);
  
      if (errors.length > 0) {
        // Extract validation messages
        const messages = errors.map(
          (err) =>
            `${err.property} - ${Object.values(err.constraints).join(', ')}`,
        );
        throw new BadRequestException({
          statusCode: 400,
          message: messages,
          error: 'Validation Failed',
        });
      }
  
      return value;
    }
  
    private toValidate(metatype: Function): boolean {
      const types: Function[] = [String, Boolean, Number, Array, Object];
      return !types.includes(metatype);
    }
  }
  