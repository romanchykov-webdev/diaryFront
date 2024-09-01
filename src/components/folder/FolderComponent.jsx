import React from 'react';
import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";
import {Box, Typography} from "@mui/material";

const FolderComponent = ({label,handlerChangeLabel}) => {

    return (

            <Box
                sx={{
                    // maxHeight: '200px',
                    width: '100%',
                    overflow: 'hidden',
                    border:'1px solid red',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <Button
                    onClick={()=>handlerChangeLabel(label)}
                    sx={{
                    display:'flex',
                    flexDirection:'column',
                    width:'100%',
                }}>
                    <FolderIcon sx={{
                        width: '100px',
                        height:'100px',

                    }}/>
                    <Typography variant="body2" color="text.secondary">{label}</Typography>
                </Button>


            </Box>


    );
};

export default FolderComponent;