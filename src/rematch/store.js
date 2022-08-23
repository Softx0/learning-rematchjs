import { init } from "@rematch/core";
import * as models from "../models/count.model";

const store = init({ models });

export default store;