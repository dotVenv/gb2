'use server';

import axios from "axios";
import { signal } from "@preact/signals-react";

const AllMemberships = async(method) => {

    let res  = signal(null);
    if (method == 'get'){
        res.value = await axios({
            url: '/all-memberships',
            method: 'get',
        }).then(resp => {
            
            return resp.data.message;
        }).catch(err =>{
            return err.response.data.message;
        })
    };
    
    return res.value;
};

export default AllMemberships;