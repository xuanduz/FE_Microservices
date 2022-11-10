const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.use(jsonServer.rewriter({
    "/comment/:id": "/comment?comment_id"
}));

server.get('posts/:post_id', (req, res) => {
    let post = router.get("posts")
        .find({ id: sessionId })
        .value();
    if (post) {
        res.jsonp(post);
    } else {
        res.sendStatus(404);
    }
}
)
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
        req.body.updateAt = Date.now() + 1;
    }
    // Continue to JSON Server router
    next()
})

// Use default router
server.use("/api", router)
server.listen(3006, () => {
    console.log('JSON Server is running')
})