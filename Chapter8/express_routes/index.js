const port = 3000,
    express = require("express"),
    app = express();



//9.5
app.use(
    express.urlencoded({
        extended: false
    })
); 
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});
//9.4
app.use((req, res, next) => {
        console.log(`request made to: ${req.url}`);
        next();
});

//9.3
app.get("/:games", (req, res) => {
    let veg = req.params.games;
    res.send(`This is the page for ${veg}`);
});


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});