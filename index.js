const cors_proxy = require("cors-anywhere");

const host = "study-bot-3c3o.onrender.com";
const port = 3000;

cors_proxy
  .createServer({
    originWhitelist: [],
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, () => {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
  
