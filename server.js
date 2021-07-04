const express = require('express')
const path = require("path")

const app = express()

const publicDir = path.join(__dirname, "dist")

// css
app.use(`/js`, (req, res, next) => {
    res.header("Cache-Control", `public,max-age=86400`)
    next()
}, express.static(path.join(publicDir, "js")))
// dist
app.get('*', express.static(publicDir))

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

const port = 3000

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
