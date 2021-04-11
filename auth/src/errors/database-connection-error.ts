export class DatabaseConnectionError extends Error {
  reason = 'Error connecting to DB';

  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
