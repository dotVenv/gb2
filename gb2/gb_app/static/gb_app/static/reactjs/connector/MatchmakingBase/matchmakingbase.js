'use server';

import { GETCSRFToken } from "../Base/getcsrf";


import axios from "axios";
import { signal } from "@preact/signals-react";

export default class MatchmakingBase{
    constructor(){};

    async matchmakingSearch(uid, tuid){

        let res = await axios({
            url: '/tournament',
            method: 'post',
            data: {uid: uid, tuid: tuid, poststep:'mm_search'},
            headers: { 'X-CSRFTOKEN': GETCSRFToken(), 'Content-Type': 'multipart/form-data'}

        }).then(resp => {
            if (resp){        
                return resp.data.message;
            };
        }).catch(err => {
            if (err.response){
                return err.response.data.message;
            };
        });

        if (res){
            return res;
        }
    };
}