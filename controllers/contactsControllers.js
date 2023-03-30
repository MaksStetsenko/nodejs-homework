const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require("../models/contacts");

const { asyncWrapper } = require("../utils/asyncWrapper");

const getContactsController = asyncWrapper(async (req, res, _) => {
  const ownerId = req.user.id;
  const queryString = req.query;

  const contacts = await listContacts(ownerId, queryString);
  res.status(200).send(contacts);
});

const getContactByIdController = asyncWrapper(async (req, res, _) => {
  const contactId = req.params.contactId;
  const contact = await getContactById(contactId);

  res.status(200).json(contact);
});

const addContactController = asyncWrapper(async (req, res, _) => {
  const newContactData = {
    ...req.body,
    owner: req.user.id,
  };

  const newContact = await addContact(newContactData);
  res.status(201).json(newContact);
});

const putContactController = asyncWrapper(async (req, res, _) => {
  const contactId = req.params.contactId;
  const updatedContact = await updateContact(contactId, req.body);

  res.status(200).json(updatedContact);
});

const deleteContactController = asyncWrapper(async (req, res, _) => {
  const contactId = req.params.contactId;

  await removeContact(contactId);

  res.status(204).send();
});

const updateStatusContactController = asyncWrapper(async (req, res, _) => {
  const contactId = req.params.contactId;
  const updatedContact = await updateStatusContact(contactId, req.body);
  res.status(200).json(updatedContact);
});

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactController,
  putContactController,
  deleteContactController,
  updateStatusContactController,
};
