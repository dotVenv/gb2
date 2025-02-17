'use server';

import { signal } from "@preact/signals-react";
import { atom } from "jotai";
import axios from 'axios';
import { GETCSRFToken } from "../Base/getcsrf";


export default class TournamentBase{

    constructor(){};

    async getTournaments(poststep,filter=null){
        let res = await axios({
                url: location.href,
                method: 'post',
                data: {uid: this.uid, poststep: poststep, filter:filter},
                headers:{
                    'X-CSRFTOKEN': GETCSRFToken(),
                    'Content-Type': 'multipart/form-data',
                }
            }).then(resp => {
                if (resp){

                    return resp.data.message;
                }
                
            
            }).catch(err => {
                if (err.response){
                    return err.response.data.message;
                };

            });
     
      if (res){
        this.tournaments = res;
      };
     return
    };
    

   
    async setTournament(tuid, filter, poststep){
        var dataholder = null;
        var setInternal = false;
        if (filter !== 'entry'){
            dataholder = {uid: this.uid, tuid: tuid, poststep: poststep, status:filter};
        }else{
            dataholder = {uid: this.uid, tuid: tuid, poststep: poststep, filter:filter};
            setInternal = true;
        }
        let res = await axios({
            url: '/tournaments',
            method: 'post',
            data: dataholder,
            headers: {
                'X-CSRFTOKEN': GETCSRFToken(),
                'Content-Type': 'multipart/form-data',
            }
        }).then(resp => {
            if (resp){
                if (setInternal){
                    this.currentTourney = resp.data.message.tournaments[0];
                    return resp.data.message.status;
                };
                return resp.data.message;
            };
        }).catch(err => {
            if (err.reponse){
                return err.reponse.data.message;
            };
        });
        
        return res;
    };



};