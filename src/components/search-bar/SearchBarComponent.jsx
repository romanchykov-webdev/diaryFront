import React, {useEffect, useState} from 'react';
import { TextField, Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import {searchCardsActions} from "./searchSlice";
const SearchBarComponent = () => {

    const titleCardSearch=useSelector((state)=>state.cards.cards)

    const [searchCardsTitle,setSearchCardsTitle]=useState(titleCardSearch)
    const [value, setValue] = useState("");

    const dispatch=useDispatch()

    useEffect(()=>{

            if(value!==''){
                const filteredCards=titleCardSearch.filter(item=>
                    item.title.toLowerCase().includes(value.toLowerCase())
                )
                setSearchCardsTitle(filteredCards)
                dispatch(searchCardsActions(filteredCards))
            }else{
                dispatch(searchCardsActions(null))
            }

        // console.log('searchTitle',searchTitle)
        // console.log('searchCardsTitle',searchCardsTitle)
    },[dispatch,titleCardSearch,value])

    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIcon
                sx={{ color: 'action.active', mr: 1, my: 0.5 }}
            />
            <TextField
                sx={{
                    backgroundColor: 'transparent',
                }}
                autoComplete='off'
             value={value}
             onChange={(e)=>setValue(e.target.value)}
                label="Поиск" variant="standard"
            />
        </Box>
    );
};

export default SearchBarComponent;
