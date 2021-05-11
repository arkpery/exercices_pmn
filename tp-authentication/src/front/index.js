const express = require("express");
const fs = require("fs");

const router = express.Router();

router.use((req, res, next) => {
    const filename = `${__dirname}${req.url}`;

    if (fs.existsSync(filename) && 
        fs.statSync(filename).isFile()){
            const data = fs.readFileSync(filename, {
                encoding: "utf8"
            });
            const arr = `${filename}`.split(".");
            if (arr.length > 1){
                const extension = arr[arr.length - 1];
                if (["js", "css", "html"].indexOf(extension) > -1){
                    res.setHeader("Content-Type", `text/${extension}`);
                }
            }
            res.end(data);
    }
    else {
        next();
    }
});

router.get("/", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/public/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

/*
router.get("/error", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/public/error.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

router.get("/login", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/public/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

router.get("/register", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/public/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

router.get("/signout", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/public/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

router.get("/post", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/public/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

router.get("/admin/post", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/public/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

router.get("/post/create", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/public/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});


/*

router.get("/login", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/user/login/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

router.get("/register", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/user/register/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

router.get("/post", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/post/list/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

router.get("/post/create", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/post/create/index.html`,  {
        encoding: "utf8"
    });

    res.setHeader("Content-Type", "text/html");
    res.end(data);
});

*/


module.exports = router;
