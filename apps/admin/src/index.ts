
import { server } from "db-management";
import { ENV } from "db-management/config/dotenv";

server.listen(ENV.PORT);
console.log("DATA SERVER RUNNING", ENV.PORT);