const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: "public",
});

// CORS 설정
server.use(
  cors({
    origin: ["http://localhost:3000", "https://todo-xi-seven-20.vercel.app"],
    credentials: true, // credentials 허용
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
