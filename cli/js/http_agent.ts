// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

export interface HTTPAgentOptions {
  ca: String;
  cert: String;
  key: String;
  rejectUnauthorized: Boolean;
}

export class HTTPAgent {
  readonly ca: String;
  readonly cert: String;
  readonly key: String;
  readonly rejectUnauthorized: Boolean;

  constructor(options: HTTPAgentOptions) {
    this.ca = options.ca;
    this.cert = options.cert;
    this.key = options.key;
    this.rejectUnauthorized = options.rejectUnauthorized;
  }
}