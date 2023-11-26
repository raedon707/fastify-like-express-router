declare namespace App {
  export interface Schema {
    query: object;
    params: object;
    body: object;
    response: object;
  }

  export interface HandlerOptions {
    schema: Schema;
    preHandler: Array<import("express").Handler>;
    postHandler: Array<import("express").Handler>;
    isAuthenticated: Boolean;
    isBasicAuthenticated: Boolean;
  }

  export interface Handler {
    (path: string, options: HandlerOptions, handler: import("express").Handler);
  }

  export interface Context {
    reqTimeStamp: string;
    traceId: string;
    logger: typeof import("@src/libs/logger").Logger;
  }
}

declare namespace Express {
  export interface Request {
    authenticated?: Object;
    context: App.Context;
  }
}
