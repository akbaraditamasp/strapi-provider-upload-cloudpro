const { default: axios } = require("axios");
const FormData = require("form-data");

module.exports = {
  init(providerOptions) {
    const client = axios.create({
      baseURL: "https://www.idprocloud.com/api/v1",
      headers: {
        "PRO-Box-Token": providerOptions.boxToken,
      },
    });

    return {
      upload(file) {
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file.buffer, {
          filename: file.name,
        });
        formData.append("isPublic", true);

        return client.post("/box", formData).then((response) => {
          file.hash = response.data.key;
          file.url = response.data.url;

          return file;
        });
      },
      delete(file) {
        return client.delete("/box/" + file.hash).then(() => {
          return;
        });
      },
      isPrivate() {
        return false;
      },
    };
  },
};
