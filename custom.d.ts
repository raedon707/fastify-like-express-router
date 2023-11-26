declare namespace App {
  export interface Context {
    reqTimeStamp: string;
    traceId: string;
    sequelize: import("sequelize").Sequelize;
    logger: typeof import("@src/libs/logger").Logger;
    cache: import("@src/libs/cache").Cache;
    sequelizeTransaction?: import("sequelize").Transaction;
  }
}

declare namespace Express {
  export interface Request {
    authenticated?: Object;
    context: App.Context;
  }
}
