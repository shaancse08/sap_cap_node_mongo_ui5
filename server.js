const cds = require("@sap/cds");
const { connectDatabase } = require("./srv/database/connection");
cds.on("bootstrap", async (app) => {
  const connection = await connectDatabase();
  console.log(`MongoDB Connected at ${connection}`);
});
