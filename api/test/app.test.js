const request = require("supertest");
const app = require("../app");

describe("Test du router index.js", () => {
    test("Code HTTP 200 attendu", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });

    test("Réponse au format json attendue avec le contenu : {message:'Hello, World !'}", async () => {
        const response = await request(app).get("/").set('accept', 'json');
        expect(response.body.message).toMatch("Hello, World !");
    });
});
