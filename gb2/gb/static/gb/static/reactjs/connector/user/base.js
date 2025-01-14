'use server';
import React from "react";
import { signal } from "@preact/signals-react";
import axios from "axios";
import { GETCSRFToken } from "./GETCsrftoken";

/* set initial data to check login buttons and redirects */

export class initialData {

    constructor(){

        this.initialPull = signal(null);
        this.loggedin = signal(false);
        this.cookie_consent = signal(null);
        
    };

    async loginUser(uname,pwd){

        await axios({
            url:'/login',
            method:'post',
            data: { uname: uname, pwd: pwd},
            timeout: 100,
            headers: {
                 'X-CSRFTOKEN': GETCSRFToken(),
                 'Content-Type': 'multipart/form-data'
            }
        }).then(function (response) {
            console.log(response);
            if (response == 200){
                return 'success';
            }else{
                return 'failed'
            }

        }).catch(function (response){
            return 'failed';
        });


    };

    setCookie(userResponse){
        this.cookie_consent.value = userResponse;
        return this.cookie_consent.value;
    }
};
 