
const misc = require('../helpers/misc');

const message = {
  sendResponse: (res, msgCode, data) => {
    return misc.responses(res, msgCode, data);
  }
};

module.exports = message;
