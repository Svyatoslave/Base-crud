import express from "express";

const PORT = 8888;

const counterEx = () => {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
};

const counter = counterEx();
const count1 = counter();

let users = {
  [count1]: {
    id: count1,
    name: "Svyatoslav",
    username: "svyat",
    email: "svyatoslave@yandex.ru",
    address: "Obninsk",
    password: "123321",
  },
};

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const count = counter();
  users[count] = { id: count, ...req.body };
  res.status(201).json(users[count]);
});

app.get("/users", (req, res) => {
  res.json(Object.values(users));
});

app.get("/users/:id", (req, res) => {
  res.json(users[req.params.id]);
});

app.put("/users/:id", (req, res) => {
  users[req.params.id] = { id: req.params.id, ...req.body };
  res.json(users[req.params.id]);
});

app.delete("/users/:id", (req, res) => {
  delete users[req.params.id];
  res.send(true);
});

export default app;

app.listen(PORT);
