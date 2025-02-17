'use server';

import { atom } from "jotai";
import axios from 'axios';
import { GETCSRFToken } from "../Base/getcsrf";
import TournamentBase from "../TournamentsBase/tournamentbase";

var checkWindowLoc = window.location.pathname.split('/');

export default class CurrentUser extends TournamentBase{

    constructor(props){
        super(props);
        this.setAtoms();

    };


   
    setAtoms(){
        const viewTournament = async(eid) => {await this.setTournament(eid, 'entry', 'get_all')};
        const viewTickets = async() => {await this.getTickets()};
        this.userAtom = atom(async () => {
              this.uid = document.getElementById('conn0').textContent;
                let res = await axios({
                        url: '/user-defaults',
                        method: 'post',
                        data: { uid: this.uid },
                        headers: { 'X-CSRFTOKEN': GETCSRFToken(), 'Content-Type': 'multipart/form-data'}
                    }).then(resp => {
                        resp.data.message.setup_step < 4 ? this.setupSteps('email') : undefined;
                        if (checkWindowLoc[1] == 'tournament'){ 
                            viewTournament(resp.data.message.active_entry);   
                        };
                        if (checkWindowLoc[1] == 'myprofile'){ 
                            viewTickets();   
                        };
                        return resp.data.message;
                    }).catch(err => {
                        return err.response.data.message;
                    });

                    return res;
            });
      
    };

    setupSteps(fetchStep){

        this.setupStepsAtom = atom(async () => {
            
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

        });
    };

    async submitSetup(fetchStep, userInput){

        let res = await axios({
            url:'/setup-steps',
            method:'post',
            data:{uid: this.uid, fetchStep: fetchStep, userInput:userInput},
            headers:{ 
                'X-CSRFTOKEN': GETCSRFToken(),
                'Content-Type': 'multipart/form-data'
            }
        }).then(resp => {
            if (fetchStep == 'email-submit' && userInput !== 'expired' && resp.data.message.otp !== 'invalid'){
                location.reload();
            }else{
                return resp.data.message;
            }
           
        }).catch(resp => {
            return resp.data.message;
        });

    return res;

    };

    async allMemberships(method){
        
        this.membershipOptionsAtom =  await AllMemberships(method);
        if (this.membershipOptionsAtom != null || this.membershipOptionsAtom != undefined){
            //this.membershipOptionsAtom = atom(this.membershipOptionsAtom);
            return true;
        }else{
            return null;
        };
    };
    
    async updateAccount(data, poststep){
        
        let res = await axios({
            url:location.href,
            method: 'post',
            data : {uid: this.uid, poststep: poststep, input: data },
            headers:{ 
                'X-CSRFTOKEN': GETCSRFToken(),
                'Content-Type': 'multipart/form-data'
            },
        }).then(resp => {
            if (resp){
                return resp.data.message;
            }

        }).catch(err => {
            if ( err.response.status){
                return err.response.data.message;
            };
        });

        return res;
    };

    async getTickets(){

     
        let res = await axios({
            url: location.href,
            method: 'post',
            data:{uid: this.uid, poststep: 'user_tickets'},
            headers:{ 
                'X-CSRFTOKEN': GETCSRFToken(),
                'Content-Type': 'multipart/form-data'
            },
        }).then(resp => {
            if (resp){
                return resp.data.message.tickets;
            };
        }).catch(err => {
            if (err.response.status){
                return err.response.data.message;
            };
        });

        if (res){
            this.currentTickets = res;
        };
        return;
    };

    setQR(data){
        this.QR_uri = data[1];
        this.b32 = data[0];
    };

};