import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
  } from '@nestjs/common';
  
  @Catch()
  export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);
  
    catch(exception: any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
  
      // Log the error details for debugging
      this.logger.error(
        `HTTP Status: ${status} | Error: ${exception.message} | Path: ${request.url}`,
        exception.stack,
      );
  
      // Build the error response
      const errorResponse = {
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
        message:
          exception.response?.message || exception.message || 'Internal server error',
      };
  
      // Send the error response
      response.status(status).json(errorResponse);
    }
  }
  