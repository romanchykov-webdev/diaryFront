import React, { useState} from 'react';
import {Stack, Autocomplete, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

const SearchBarComponent = ()=> {
    const [selectedItem,setSelectedItem]=useState('')
    const navigate = useNavigate()
    //
    const [temp,setTemp]=useState('')
    //
    const aray=[1,2,3,4,5,6,7,8]
    // console.log(selectedItem)
    return (
        <Stack spacing={2} sx={{width: '300px'}}>
            <Autocomplete
                value={selectedItem}
                onChange={(e)=> {
                    setTemp(e.target.value)
                }}
                renderInput={(element) => (
                    <TextField
                        {...element}
                        label={'Поиск'}
                        InputProps={{
                            ...element.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                options={aray.map((item=>item))}
            />
        </Stack>
    );
};

export default SearchBarComponent;