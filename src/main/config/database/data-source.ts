import path from "path";
import { DataSource } from "typeorm";
import { environment } from "../environments";

export const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(environment.infrastructure.database.postgresql.port),
  username: environment.infrastructure.database.postgresql.user,
  password: environment.infrastructure.database.postgresql.password,
  database: environment.infrastructure.database.postgresql.database,
  entities: [
    `${path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "contexts",
      "**",
      "external",
      "entities",
      "*.{ts,js}",
    )}`,
  ],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
});
