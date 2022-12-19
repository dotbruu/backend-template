import { logger } from "@main/adapters/pino-adapter";
import { appDataSource } from "./database/data-source";

export default async () => {
  try {
    logger.info("connecting to database...");
    await appDataSource.initialize();
    logger.info("connection with database established!");
  } catch (error) {
    logger.info(error);
  }
};
