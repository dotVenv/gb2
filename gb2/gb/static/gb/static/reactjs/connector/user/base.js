'use client';
import React from "react";
import { signal } from "@preact/signals-react";

/* set initial data to check login buttons and redirects */

class initialData {

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
    };

    setLoggedIn(){
        this.loggedin.value = !this.loggedin.value;
    }

    setChecked(){
        this.initialPull.value = true;
    }
};

export {initialData};