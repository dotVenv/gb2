'use server';

import { signal } from "@preact/signals-react";
import axios from  'axios';
import { GETCSRFToken } from '../index';
import {  atom, useRecoilState } from "recoil";


class ConnectorBase{

    constructor(){

        this.userInfo = signal({
            uid: document.getElementById('conn0').textContent,
            uname: null,
            email: null,
        });
        this.preferencesInfo = signal({
            server: null,
            platform: null,

        });
        this.userBadges = signal([]);


    };
    
    queryUser(){

    
    };

};


export default ConnectorBase;