'use server';

import { signal } from "@preact/signals-react";

//recoil
import { atom, selector, useRecoilState } from "recoil";

//zustand
import { create } from "zustand";

export default class CurrentUser{

    constructor(){
        
        //recoiljs
        this.userInfo0 = atom({
            key: 'userInfo',
            default: {
                uid: document.getElementById('conn0').textContent,
                uname: '',
            }
        })

        //zustand
        this.userInfo1 = create((set) => ({

            uid: document.getElementById('conn0').textContent,
            uname: null,
            checkUname: () => set(sts)

        }))

    };

    
};