import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as path from "path";

export default ():PostgresConnectionOptions=>({
    url: process.env.URL,
    type: "postgres",
    entities:[path.join(__dirname, "..", '**', '*.entity.{ts,js}')],
    ssl: true,
    synchronize: true
})