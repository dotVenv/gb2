'use server';
import React from "react";
import { signal } from "@preact/signals-react";

/* set initial data to check login buttons and redirects */

export class initialData {

    constructor(){

        this.initialPull = signal(null);
        this.uname = signal(null);
        this.email = signal(null);
        this.loggedin = signal(null);
        this.cookie_consent = signal(null);
        
    };

    setUser(uname, email){
        this.email.value = email;
        this.uname.value = uname;
        this.setLoggedIn();
    };

    setLoggedIn(){
        this.loggedin.value = !this.loggedin.value;
    };

    checkUser(){
        this.initialPull.value = true;
        this.setUser();
    };
    setCookie(userResponse){
        this.cookie_consent.value = userResponse;
        return this.cookie_consent.value;
    }
};
