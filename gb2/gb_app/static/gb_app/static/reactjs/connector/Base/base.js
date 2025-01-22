'use server';

import CurrentUser from "../UserBase/userbase";


class ConnectorBase extends CurrentUser{

    constructor(props){
        super(props);

        this.newAnnouncment = JSON.parse(document.getElementById('newAnnounc').textContent);
    };
    
};
export default ConnectorBase;
