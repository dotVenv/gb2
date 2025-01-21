'use server';

import React, { createContext } from "react";
import { ConnectorBase } from "../index";
const Conn = new ConnectorBase(); 
const ConnContext = createContext();
export { Conn, ConnContext };