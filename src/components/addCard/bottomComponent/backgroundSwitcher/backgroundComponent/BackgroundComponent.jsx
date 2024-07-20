import React from 'react';
import { Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {backgroundColorCardAction} from "../../../bodyComponent/todoComponent/todocomponentSlice";



import BackgroundImgComponentCelebration from "./backgroundImgComponents/BackgroundImgComponentCelebration";
import BackgroundImgComponentFoodLight from "./backgroundImgComponents/BackgroundImgComponentFoodLight";
import BackgroundImgComponentGroceryLight from "./backgroundImgComponents/BackgroundImgComponentGroceryLight";
import BackgroundImgComponentMusicLight from "./backgroundImgComponents/BackgroundImgComponentMusicLight";
import BackgroundImgComponentNotesLight from "./backgroundImgComponents/BackgroundImgComponentNotesLight";
import BackgroundImgComponentPlacesLight from "./backgroundImgComponents/BackgroundImgComponentPlacesLight";
import BackgroundImgComponentRecipeLight from "./backgroundImgComponents/BackgroundImgComponentRecipeLight";
import BackgroundImgComponentTravelLight from "./backgroundImgComponents/BackgroundImgComponentTravelLight";
import BackgroundImgComponentVideoLight from "./backgroundImgComponents/BackgroundImgComponentVideoLight";

const BackgroundComponent = () => {
    const dispatch = useDispatch();
    const backgroundColorCard = useSelector(state => state.createNewTodo.backgroundColorCard);
    const switcherBackground = (recipe) => {
        dispatch(backgroundColorCardAction(recipe))
    }

    return (
        <Grid container sx={{outline: '1px solid white', padding: 0, paddingTop: 2}}>
            <BackgroundImgComponentCelebration backgroundColorCard={backgroundColorCard} switcherBackground={switcherBackground}/>
            <BackgroundImgComponentFoodLight backgroundColorCard={backgroundColorCard} switcherBackground={switcherBackground}/>
            <BackgroundImgComponentGroceryLight backgroundColorCard={backgroundColorCard} switcherBackground={switcherBackground}/>
            <BackgroundImgComponentMusicLight backgroundColorCard={backgroundColorCard} switcherBackground={switcherBackground}/>
            <BackgroundImgComponentNotesLight backgroundColorCard={backgroundColorCard} switcherBackground={switcherBackground}/>
            <BackgroundImgComponentPlacesLight backgroundColorCard={backgroundColorCard} switcherBackground={switcherBackground}/>
            <BackgroundImgComponentRecipeLight backgroundColorCard={backgroundColorCard} switcherBackground={switcherBackground}/>
            <BackgroundImgComponentTravelLight backgroundColorCard={backgroundColorCard} switcherBackground={switcherBackground}/>
            <BackgroundImgComponentVideoLight backgroundColorCard={backgroundColorCard} switcherBackground={switcherBackground}/>

        </Grid>
    );
};

export default BackgroundComponent;