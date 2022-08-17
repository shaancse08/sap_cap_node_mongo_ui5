const cds = require("@sap/cds");
const { connectDatabase } = require("./srv/database/connection");
cds.on("bootstrap", async (app) => {
  await connectDatabase();
});
