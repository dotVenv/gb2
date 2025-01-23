'use server';

import { signal } from "@preact/signals-react";
import { atom } from "jotai";
import axios from 'axios';
import { GETCSRFToken } from "../Base/getcsrf";

export default class CurrentUser{

    constructor(){
        this.setAtoms();

    };


   
    setAtoms(){
        this.userAtom = atom(async () => {
              this.uid = document.getElementById('conn0').textContent;
                let res = await axios({
                        url: '/user-defaults',
                        method: 'post',
                        data: { uid: this.uid },
                        headers: { 'X-CSRFTOKEN': GETCSRFToken(), 'Content-Type': 'multipart/form-data'}
                    }).then(resp => {
                        return resp.data.message;
                    }).catch(err => {
                        return err.response.data.message;
                    });
                    return res;
            });
      
    };

    setupSteps(fetchStep){

        const setupStepsRes = async () => {
            
            let res =  await axios({
                    url: '/setup-steps',
                    method: 'post',
                    data: { uid: this.uid, fetchStep: fetchStep },
                    headers: {
                        'X-CSRFTOKEN': GETCSRFToken(),
                        'Content-Type': 'multipart/form-data',
                    }
                }).then(resp => {

                    return resp.data.message;

                }).catch(err => {

                    return err.response.data.message;
                });

            return res;

        };
        this.setupStepsAtom = atom(setupStepsRes);
    };
    
};