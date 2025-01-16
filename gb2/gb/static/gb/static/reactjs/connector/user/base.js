'use server';
import React from "react";
import { signal } from "@preact/signals-react";
import axios from "axios";
import { GETCSRFToken } from "./GETCsrftoken";
/* set initial data to check login buttons and redirects */

export class initialData {

    constructor(){

        this.initialPull = signal(false);
        this.loggedin = signal(false);
        this.cookie_consent = signal(false);
        this.uname = signal(null)
     
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
    }

    async initCheck() {


        try{

            await axios({
                url: '/initcheck',
                method: 'get',
                headers: {
                    'X-CSRFTOKEN': GETCSRFToken(),
                },
    
            }).then(response => {
                console.log('getting response:');
                if (response.status == 200){

                    const responseMessage = response.data.message;
                    console.log(responseMessage);
                    if (responseMessage.is_auth){

                        this.setLoggedIn();
                        this.uname.value = responseMessage.usr;
                    }else{
                        this.uname.value = responseMessage.usr;
                        this.loggedin.value ? this.setLoggedIn() : undefined;
                        
                    }
                    this.initialPull.value = true;
                    
                }else{
                    this.loggedin.value ? this.setLoggedIn() : undefined;
                    this.initialPull.value = false;
                }
    
            }).catch(response => {
                
                if (response){
                    this.initialPull = true;
                    this.loggedin.value ? this.setLoggedIn() : undefined;
                }
    
            });
        }catch(e){
            console.log(e);
            return null;
        }
        

    };
    setLoggedIn() {
        this.loggedin.value = !this.loggedin.value;
    }
};
 