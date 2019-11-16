// creates a new Express server
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

// tell Express to start a socket and listen for connections on the path
app.listen(port, () => console.log(`Server is running on port ${port}`));
