class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotAuthorisedError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class EmailInUseError extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

module.exports = { BadRequestError, NotAuthorisedError, EmailInUseError };
