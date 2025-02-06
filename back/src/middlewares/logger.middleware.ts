import { Request, Response, NextFunction } from 'express';

export function LoggerGlobalMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const timestamp = new Date().toISOString();
  console.log(
    `[${timestamp}] Estás ejecutando un método ${req.method} en la ruta ${req.url}`,
  );
  next();
}
