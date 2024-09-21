// docker run --name demo-pg -e POSTGRES_PASSWORD=postgres -d -p 0.0.0.0:45432:5432 postgres
import { sql } from "./demo3.common";

await sql`DROP TABLE IF EXISTS users`
await sql`CREATE TABLE users (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name text NOT NULL
    )`

const firstParts = ["Al", "Be", "Cha", "Da", "El"];
const secondParts = ["ex", "na", "ra", "vid", "lie"];
const thirdParts = ["son", "ton", "man", "ley", "ford"];

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomName() {
    return randomElement(firstParts) + randomElement(secondParts) + randomElement(thirdParts);
}

for (let i=0; i<100; i++) {
    const name = randomName()
    console.log(`created user ${name}`)
    await sql`INSERT INTO users (name) VALUES (${name})`
}

sql.end();