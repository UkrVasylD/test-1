const Joi = require("joi");

const { ERRORS } = require("../error.constant");
const { objectId } = require("../SharedDTO");

const getAllUsersDTO = Joi.object()
  .keys({
    skip: Joi.number().default(0).required(),
    limit: Joi.number().max(100).default(15).required(),
    userId: Joi.object().default(null),
  })
  .messages(ERRORS);

const getUserByIdDTO = Joi.object()
  .keys({
    targetId: objectId,
    userId: Joi.object().default(null),
  })
  .messages(ERRORS);

module.exports = {
  getAllUsersDTO,
  getUserByIdDTO,
};
