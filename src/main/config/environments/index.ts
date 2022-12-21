import dotenv from "dotenv";
import "./set-multi-environment";

dotenv.config();
export interface IEnvironment {
  infrastructure: {
    server: {
      rest: {
        express: {
          port: number;
        };
      };
    };
    web: {
      url: string;
    };
    database: {
      postgresql: {
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
      };
    };
    mail: {
      user: string;
      password: string;
      host: string;
      port: string;
    };
  };
  secrets: {
    hash: string;
    jwt: string;
    temporary_permission: string;
  };
}

const environment: IEnvironment = {
  infrastructure: {
    server: {
      rest: {
        express: {
          port: Number(process.env.SERVER_PORT) || 4949,
        },
      },
    },
    web: {
      url: process.env.WEB_URL,
    },
    database: {
      postgresql: {
        host: process.env.POSTGRESQL_DATABASE_HOST || "localhost",
        port: Number(process.env.POSTGRESQL_DATABASE_PORT) || 5438,
        user: process.env.POSTGRESQL_DATABASE_USER || "development",
        password: process.env.POSTGRESQL_DATABASE_PASSWORD || "",
        database: process.env.POSTGRESQL_DATABASE_NAME || "contratadb",
      },
    },
    mail: {
      user: process.env.MAIL_USER,
      password: process.env.MAIL_PASSWORD,
      host: process.env.MAIL_HOST || "",
      port: process.env.MAIL_PORT,
    },
  },
  secrets: {
    hash: String(process.env.HASH_SECRET),
    jwt: String(process.env.JWT_SECRET),
    temporary_permission: String(process.env.TEMPORARY_PERMISSION_SECRET),
  },
};

export { environment };
