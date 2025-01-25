'use server';

import axios from "axios";


const AllMemberships = async(method) => {


    console.log('fetchin with '+ method);
    if (method == 'get'){
        await axios({
            url: '/all-memberships',
            method: 'get',
        }).then(resp => {
            return resp.data.message;
        }).catch(err =>{
            return err.response.data.message;
        })
    };
    
};

export default AllMemberships;