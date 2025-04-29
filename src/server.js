import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listner(request, response) {
    await jsonHandler(request, response) 
    routeHandler(request, response) 
}

http.createServer(listner).listen(3333)