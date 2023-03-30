const { createId } = require("./createId");

const { readFile, writeFile } = require("./fileOperations");
const {
  validatedContactOnPut,
  validatedContactOnPost,
} = require("./validateContacts");

module.exports = {
  readFile,
  writeFile,
  createId,
  validatedContactOnPut,
  validatedContactOnPost,
};
