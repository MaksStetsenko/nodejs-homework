const { Contacts } = require("./contactModel");

const listContacts = async (ownerId, { favorite, limit, page }) => {
  const pagonationPage = +page || 1;
  const pagonationLimit = +limit || 5;
  const skip = (pagonationPage - 1) * pagonationLimit;

  const queryString = favorite
    ? { $and: [{ owner: ownerId }, { favorite }] }
    : { owner: ownerId };

  return await Contacts.find(queryString).skip(skip).limit(pagonationLimit);
};

const getContactById = async (contactId) => {
  return await Contacts.findOne({ _id: contactId });
};

const removeContact = async (contactId) => {
  return await Contacts.findByIdAndDelete(contactId);
};

const addContact = async (body) => {
  return await Contacts.create(body);
};

const updateContact = async (contactId, body) => {
  return await Contacts.findByIdAndUpdate(contactId, body, { new: true });
};

const updateStatusContact = async (contactId, body) => {
  return await Contacts.findByIdAndUpdate(contactId, body, { new: true });
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
