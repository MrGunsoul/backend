exports.sendReqParam = (req, res) => {
    let veg = req.params.games;
    res.send(`This is the page for game: ${veg}`);
};