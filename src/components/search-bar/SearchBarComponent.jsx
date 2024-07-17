import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBarComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();

    const aray = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <Stack spacing={2} sx={{ width: '300px' }}>
            <Autocomplete
                value={selectedItem}
                onChange={(event, newValue) => {
                    setSelectedItem(newValue);
                    if (newValue !== null) {
                        navigate(`/search/${newValue}`);
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Поиск"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                options={aray}
                getOptionLabel={(option) => option.toString()}  // Преобразование числа в строку
                isOptionEqualToValue={(option, value) => option === value}
            />
        </Stack>
    );
};

export default SearchBarComponent;
