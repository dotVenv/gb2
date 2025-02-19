'use server';
import React from "react";
import { signal } from "@preact/signals-react";
import axios from "axios";
import { GETCSRFToken } from "./GETCsrftoken";
/* set initial data to check login buttons and redirects */

export class initialData {

    constructor(){

        this.loggedin = signal((document.getElementById('handsome').textContent));
        //convert string value to boolean
        this.loggedin.value == 'true' ? this.loggedin.value = true : this.loggedin.value = false;
        this.cookie_consent = signal(false);
        this.uname = signal(null);
        this.loggedin.value ? this.uname.value = document.getElementById('handsomer').textContent : undefined;
        //optionally send cookie response to the backend then store other data in db
        localStorage.getItem('cc') == null ? undefined : this.cookie_consent.value = localStorage.getItem('cc');
     
    };

    async loginUser(uname,pwd,rememberUser){

        const res_stat = signal(null);
        try{
            await axios({
                url:'/login',
                method:'post',
                data: { uname: uname, pwd: pwd, ru:rememberUser},
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
                    res_stat.value = error;
                };
            });
        }catch(e){     
            return 500;
        }
        return res_stat.value;
    };

    async signupUser(signupdata){

        const suRes = signal(null);
        try{
            await axios({
                url: '/signup',
                method: 'post',
                data:signupdata,
                headers:{
                    'X-CSRFTOKEN': GETCSRFToken(),
                    'Content-Type': 'multipart/form-data'
                },
    
            }).then(response => {
                if (response){
                    suRes.value = ['success',response.data.message];
                };
               
            }).catch(error => {
                if (error){
                    suRes.value = ['failed',error.response.data.message];
                };
            })

        }catch(e){
            return 500;
        };


    return suRes.value;
    };


    async contactus_submission(data){

        try{
            let contactRequest = await axios({
                url: '/contact-us',
                method: 'post',
                data: data,
                headers: {
                    'X-CSRFTOKEN': GETCSRFToken(),
                    'Content-Type': 'multipart/form-data'
                },
            }).then(response => {
                return response.status;
    
            }).catch(error => {
                return error.response.status;
            });
        
        return contactRequest;

        }catch(e){
            return 500
        }
        
    };

    setCookie(userResponse){
        this.cookie_consent.value = userResponse;
        localStorage.setItem('cc', userResponse);
        return this.cookie_consent.value;
    };
    setLoggedIn() {
        this.loggedin.value = !this.loggedin.value;
    };
};
 