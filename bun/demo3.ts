import { sql } from "./demo3.common";

async function search(text: string) {
    const searchString = "%" + text + "%"
    const result = await sql`select u.id, u.name from users u where u.name like ${searchString};`;
    console.table(result);
}

await search(Bun.argv.slice(2).join(' '))

sql.end();