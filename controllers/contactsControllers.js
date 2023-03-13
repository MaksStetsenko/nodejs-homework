const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../models/contacts");

const getContactsController = async (_, res, __) => {
  const contacts = JSON.parse(await listContacts());
  res.status(200).send(contacts);
};

const getContactByIdController = async (req, res, _) => {
  const contactId = +req.params.contactId;
  const contact = await getContactById(contactId);

  res.status(201).send(contact);
};

const addContactController = async (req, res, _) => {
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
};

const putContactController = async (req, res, _) => {
  const contactId = +req.params.contactId;
  const updatedContact = await updateContact(contactId, req.body);

  res.status(200).json(updatedContact);
};

const deleteContactController = async (req, res, _) => {
  const contactId = +req.params.contactId;
  await removeContact(contactId);

  res.status(200).json({ message: "Contact deleted." });
};

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactController,
  putContactController,
  deleteContactController,
};
