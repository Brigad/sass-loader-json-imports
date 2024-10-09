const nodeJsonImporter = require("node-sass-json-importer");

const jsonImporter = (options) => {
  return {
    canonicalize: (url) => {
      console.log(url);

      if (!url.endsWith(".json")) {
        return null;
      }

      return new URL(url);
    },
    load: (canonicalUrl) => {
      const { contents } = nodeJsonImporter().bind({ options })(
        canonicalUrl.pathname.split("/").at(-1),
        canonicalUrl.pathname
      );

      return {
        contents,
        syntax: "scss",
      };
    },
  };
};

module.exports = jsonImporter;
