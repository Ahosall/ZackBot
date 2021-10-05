const axios = require('axios');

module.exports = {
  getBuffer: async (url, options) => {
    try {
      options ? options : {}
      const res = await axios({
        method: "get",
        url,
        headers: {
          'DNT': 1,
          'Upgrade-Insecure-Request': 1
        },
        ...options,
        responseType: 'arraybuffer'
      });
      return res.data;
    } catch (e) {
      console.log(`Error : ${e}`);
    }
  }
}