'use server';

import { signal } from "@preact/signals-react";
import { atom } from "jotai";
import axios from 'axios';
import { GETCSRFToken } from "../Base/getcsrf";


export default class TournamentBase{

    constructor(){};

    async getTournaments(filter){
        let res = await axios({
                url: location.href,
                method: 'post',
                data: {uid: this.uid, poststep: filter},
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
    

    async getTournamentLeaderboard(tuid){
        let res = axios({
            url: '/tournaments',
            method: 'post',
            data: {uid: this.uid, tuid: tuid, poststep: 'get_leaderboard'},
            headers: {
                'X-CSRFTOKEN': GETCSRFToken(),
                'Content-Type': 'multipart/form-data',
            }
        }).then(resp => {
            if (resp){
                return resp.data.message;
            };
        }).catch(err => {
            if (err.reponse){
                return err.reponse.data.message;
            };
        });

        return res;
    }

    async setTournament(tuid, status, poststep, setInternal=null){
        let res = axios({
            url: '/tournaments',
            method: 'post',
            data: {uid: this.uid, tuid: tuid, status: status, poststep: poststep},
            headers: {
                'X-CSRFTOKEN': GETCSRFToken(),
                'Content-Type': 'multipart/form-data',
            }
        }).then(resp => {
            if (resp){
                if (setInternal){
                    this.currentTournamentAtom = atom(resp.data.message);
                }
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