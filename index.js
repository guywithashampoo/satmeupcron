const cron = require("node-cron");

cron.schedule(
  "*/1 * * * *",
  () => {
    fetch("https://satmeupbackend.onrender.com/cron")
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj);
      })
      .catch((error) => console.log(error));
  },
  {
    scheduled: true,
  }
);
