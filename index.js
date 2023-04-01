const expreess = require("express");
const app = expreess();
const port = process.env.PORT || 8005;
app.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(port, () => {
    console.log("server running");
})
