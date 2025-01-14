'use server';
import React from "react";
import { signal } from "@preact/signals-react";
import axios from "axios";
import { GETCSRFToken } from "./GETCsrftoken";

/* set initial data to check login buttons and redirects */

export class initialData {

    constructor(){

        this.initialPull = signal(null);
        this.uname = signal(null);
        this.email = signal(null);
        this.pwdHold = signal(null);
        this.loggedin = signal(null);
        this.cookie_consent = signal(null);
        
    };

    async loginUser(uname,pwd){

        await axios({
            url:'/',
            method:'post',
            data: { uname: uname, pwd: pwd},
            headers: {
                 'X-CSRFTOKEN': GETCSRFToken(),
                 'Content-Type': 'multipart/form-data'
            }
        })


    };

    setCookie(userResponse){
        this.cookie_consent.value = userResponse;
        return this.cookie_consent.value;
    }
};
 