// docker run --name demo-pg -e POSTGRES_PASSWORD=postgres -d -p 0.0.0.0:45432:5432 postgres
import postgres from "postgres";

export const sql = postgres({
    port: 45432,
    user: 'postgres',
    password: 'postgres'
});
