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

        const res_stat = signal(null);

        try{
            await axios({
                url:'/login',
                method:'post',
                data: { uname: uname, pwd: pwd},
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
    }

    async initCheck() {


        try{

            await axios({
                url: '/init',
                method: 'get',
                headers: {
                    'X-CSRFTOKEN': GETCSRFToken(),
                },
    
            }).then(response => {
                
                if (response.status == 200){
                    this.initialPull.value == true;
                    this.setLoggedIn(true);
                }else{
                    this.initialPull.value = true;
                    his.setLoggedIn(false);
                }
    
            }).catch(response => {
                
                if (response){
                    this.initialPull = true;
                    this.setLoggedIn(false);
                }
    
            });
        }catch(e){
            console.log(e);
            return null;
        }
        

    };
    setLoggedIn() {
        this.loggedin.value = !this.loggedin.value;
        console.log(this.loggedin.value);
    }
};
 