const port = 3000,
    express = require("express"),
    app = express();

app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully.");
});

app.get("/", (req,res) => {
    res.send("Hello, unierse")
}).listen(port, () => {
    console.log(`The express.js server has started and is listening on port number: ${port}`);
});