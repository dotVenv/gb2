'use server';

import React, { createContext } from "react";
import { initialData } from "./base";
const udata = new initialData();
udata.initCheck();
const UserContext = createContext();
export { udata, UserContext };