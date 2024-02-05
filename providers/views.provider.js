const { MODELS } = require("../constants");
const { Provider } = require("./super");

/**
 * Provider for access the views entity
 * @class ViewsProvider
 * @extends {Provider}
 */
class ViewsProvider extends Provider {
  constructor() {
    super(MODELS.VIEWS);
  }
}

module.exports = { viewsProvider: new ViewsProvider() };

/**
 * @typedef {import('./super').ObjectId} ObjectId
 * @typedef {Pick<DTO.Request.User, 'userId'>} UserFields
 */
