import request from "supertest";

import app from "../server";

describe("Users e2e", () => {
  let id;

  const createdUser = {
    name: "Elon",
    username: "Elon_Musk",
    email: "@gmail.com",
    address: "1 Rocket Rd, Hawthorne, CA 90250",
    password: "test",
  };

  const updatedUser = {
    name: "Alex",
    username: "Elon_Musk",
    email: "@gmail.com",
    address: "1 Rocket Rd, Hawthorne, CA 90250",
    password: "test",
  };

  it("POST /users", async () => {
    const res = await request(app).post("/users").send(createdUser);

    id = res.body.id;

    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual(createdUser.name);
    expect(res.body.username).toEqual(createdUser.username);
  });

  it("GET /users", async () => {
    const res = await request(app).get("/users").send();

    expect(res.statusCode).toEqual(200);
  });

  it("GET /users/:id", async () => {
    const res = await request(app).get(`/users/${id}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(createdUser.name);
    expect(res.body.username).toEqual(createdUser.username);
  });

  it("PUT /users/:id", async () => {
    const res = await request(app).put(`/users/${id}`).send(updatedUser);

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(updatedUser.name);
  });

  it("DELETE /users/:id", async () => {
    const res = await request(app).delete(`/users/${id}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(true);
  });
});
