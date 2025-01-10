'use server';

import React, { createContext } from "react";
import { initialData } from "./base";
const udata = new initialData();
const UserContext = createContext(null);
export { udata,UserContext };