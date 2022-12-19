import { ILogger } from "@shared/protocols/logger";
import pino from "pino";

const pinoLogger = pino();
export const logger: ILogger = {
  info(message: string) {
    pinoLogger.info(message);
  },
  error(message: string) {
    pinoLogger.error(message);
  },
};
