import express from "express";

const PORT = 3000;

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
  res.json(req.body);
});

app.get("/users", (req, res) => {
  res.json(Object.values(users));
});

app.get("/users/:id", (req, res) => {
  res.json(users[req.params.id]);
});

app.listen(PORT);
