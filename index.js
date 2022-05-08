const app = require("./app");
require("dotenv").config()

app.listen(process.env.PORT || port, () => {
  console.log(`API LISTENING ON PORT ${process.env.PORT}`);
});
