const express = require("express");
const {
  getContactsController,
  getContactByIdController,
  addContactController,
  putContactController,
  deleteContactController,
} = require("../../controllers/contactsControllers");

const {
  validatedContactOnPost,
  validatedContactOnPut,
} = require("../../utils");
const { isEmptyBody, isContactExist } = require("../../middlewares");

const router = express.Router();

router.get("/", getContactsController);

router.get("/:contactId", isContactExist, getContactByIdController);

router.post("/", validatedContactOnPost, addContactController);

router.delete("/:contactId", isContactExist, deleteContactController);

router.put(
  "/:contactId",
  isContactExist,
  isEmptyBody,
  validatedContactOnPut,
  putContactController
);

module.exports = router;
