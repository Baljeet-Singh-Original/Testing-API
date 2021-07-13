const request = require("supertest");
const app = require("../server");
const db = require("../Test/db");
// const User = require("../model/user");

beforeAll(async () => await db.connect());
afterAll(async () => await db.clear());
afterAll(async () => await db.close());

jest.setTimeout(15000);


describe("Test suite for user signup", () => {
    it("it should create a new user and login", async () => {
      let req = {
        name: "Baljeet Singh",
        email: "baljeetsingh@gmail.com",
        gender: "male",
        dob: "2003-03-31T18:25:43-05:00",
        contact: 9670826753,
        password: "12345678"
        
      };
      const res = await request(app).post("/api/users/").send(req);
      expect(res.status).toBe(200);
      const response = await request(app).post("/api/auth/").send({
        email: "baljeetsingh@gmail.com",
        password: "12345678",
      });
      expect(response.status).toBe(200);
    });
  });