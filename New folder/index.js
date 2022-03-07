const express = require("express");
const app = express();

//creating logger middleware
app.use(logger);

//creating route for books;
app.get("/books", (req, res) => {
    res.send({ route: "/books" })
})
//creating rourte for libraries 
app.get("/libraries", checkPermission("librarian"), (req, res) => {
    res.send({ route: "/libraries", permission: req.role })
})

//creating route for authors 
app.get("/authors", checkPermission("author"), (req, res) => {
    res.send({ route: "/authors", permission: req.role })
})

//function defination for logger
function logger(req, res, next) {
    console.log("I am logger woking for all three routes");
    next();
}
//writing function defination for check permission
function checkPermission(role) {
    return function logger1(req, res, next) {
        if (role == "librarian") {
            req.role = true;
            return next();
        }
        else if (role == "author") {
            req.role = true;
            return next();
        }

    }
}

app.listen(3000, () => {
    console.log("Listening on port 3000");
})