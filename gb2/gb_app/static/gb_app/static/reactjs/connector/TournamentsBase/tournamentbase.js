'use server';

import { signal } from "@preact/signals-react";
import { atom } from "jotai";
import axios from 'axios';
import { GETCSRFToken } from "../Base/getcsrf";


export  class TournamentBase{

    constructor(props){

    };

    async getTournaments(){
        this.tournaments = await axios({
                url: '/tournaments',
                method: 'post',
                data: {uid: this.uid, poststep: 'all_tournaments'},
                headers:{
                    'X-CSRFTOKEN': GETCSRFToken(),
                    'Content-Type': 'multipart/form-data',
                }
            }).then(resp => {
                if (resp.status == 200 ){
                    console.log('resp was successful');
                    return resp.data.message;
                }
                
            
            }).catch(err => {
                if (err.response){
                    return err.response.data.message;
                };

            });

            return 

        
    };

};