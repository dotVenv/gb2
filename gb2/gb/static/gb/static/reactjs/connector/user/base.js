'use server';
import React from "react";
import { signal } from "@preact/signals-react";
import axios from "axios";
import { GETCSRFToken } from "./GETCsrftoken";
/* set initial data to check login buttons and redirects */

export class initialData {

    constructor(){

        this.loggedin = signal(document.getElementById('handsome').textContent);
        console.log(this.loggedin.value);
        this.cookie_consent = signal(false);
        this.uname = signal(null);
        this.loggedin.value ? this.uname.value = document.getElementById('handsomer').textContent : undefined;
        console.log(this.uname.value);
     
    };

    async loginUser(uname,pwd,rememberUser){

        const res_stat = signal(null);
        try{
            await axios({
                url:'/login',
                method:'post',
                data: { uname: uname, pwd: pwd, ru:rememberUser, cc: this.cookie_consent.value},
                headers: {
                    'X-CSRFTOKEN': GETCSRFToken(),
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response =>  {

                const rstatus  = response.status;
                if (rstatus){
                    res_stat.value = rstatus;
                };

            }).catch(error =>  {
                
                if (error){
                    console.log(error);
                    res_stat.value = error;
                };
            });
        }catch(e){     
            return 500;
        }
        return res_stat.value;
    };

    setCookie(userResponse){
        this.cookie_consent.value = userResponse;
        return this.cookie_consent.value;
    };
    setLoggedIn() {
        this.loggedin.value = !this.loggedin.value;
    };
};
 