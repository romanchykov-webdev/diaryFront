import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const AlertComponent = ({message, severity, isOpen}) => {
    // const [open, setOpen] = useState(true);
    // console.log('AlertComponent ')
    // console.log('open', isOpen)
    console.log('severity', severity)


    return (
        <Snackbar
            sx={{}}
            open={isOpen} autoHideDuration={2000} onClose={() => isOpen}>
            <Alert severity={severity} sx={{
                width: '100%',
                backgroundColor: 'var(----background-color)',
                ...(severity==='error' ? {
                    backgroundColor: 'red',
                }
                : {backgroundColor: 'green',}
                ),
            }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default AlertComponent;
