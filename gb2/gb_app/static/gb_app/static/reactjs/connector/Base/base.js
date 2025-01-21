'use server';

import { cache } from "react";
import { signal } from "@preact/signals-react";
import axios from  'axios';
import { GETCSRFToken } from '../index';

class ConnectorBase{

    constructor(){

        const initfetch = cache(this.getUname);

    };


    async getUname(){

        await axios({
            url: '/',
            method: 'post',
            data:{uname: 'test'},
            headers: {
                'X-CSRFTOKEN': GETCSRFToken(),
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => {
            this.username.value = response.data.message;

        }).catch(err => {
            this.errolog.value.push(err.response.data.message);
        });


  
    };
     
};


export default ConnectorBase;