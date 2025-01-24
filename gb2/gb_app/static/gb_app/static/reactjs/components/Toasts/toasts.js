'use client';
import React, { useState, SyntheticEvent } from "react";
import { Alert, Snackbar, SnackbarCloseReason} from "@mui/material";


const CustomToast = ({ sev, title, desc }) => {

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    return(
        <>
        <Snackbar
        open={open}
        autoHideDuration={3500}
        onClose={handleClose}
        >
            <Alert severity={sev} variant="filled"sx={{ width: '100%' }} > 
                <span className="text-tiny">{desc}</span>
            </Alert>
        </Snackbar>
        </>
    );
};

export default CustomToast;