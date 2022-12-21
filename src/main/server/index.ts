import { logger } from "@main/adapters/pino-adapter";
import makeApp from "@main/config/app";
import { environment } from "@main/config/environments";

const makeServer = async () => {
  const app = await makeApp();

  app.listen(environment.infrastructure.server.rest.express.port, () => {
    logger.info(
      `server running on port ${environment.infrastructure.server.rest.express.port}!`,
    );
  });
};

makeServer();
