import React, {useEffect, useLayoutEffect, useState} from 'react';
import CardComponent from "../../components/card/CardComponent";
import {WrapperCards, WrapperHomePage} from "./style";
// import AddCardMobiComponent from "../../components/addCard/mobile/AddCardMobiComponent";
import {
    Box,
    // Typography,
    // useMediaQuery
} from "@mui/material";
import AddCardFsComponent from "../../components/addCard/bigScrin/AddCardFsComponent";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllCards,
    getCardIds,
    // updateCardOrders
} from "../../store/thunks/cardActions/cardActions";
import FullscreenCardComponent from "../../components/fullscreenCard/FullscreenCardComponent";
// import FullscreenCardComponent from "../../components/fullscreenCard/FullscreenCardComponent";
// import WrapperMobAddCardComponent from "../../components/addCard/mobile/WrapperMobAddCard/WrapperMobAddCardComponent";
// import FolderIcon from '@mui/icons-material/Folder';
// import Button from "@mui/material/Button";
import FolderComponent from "../../components/folder/FolderComponent";
import {addLabelAction} from "../../components/sidebar/sidebarSlice";

const HomePage = () => {
    // const isMobile = useMediaQuery('(max-width:760px)');
    const dispatch = useDispatch();
    const allCards = useSelector((state) => state.cards.cards);
    const activeLabel = useSelector((state) => state.sidebarSlice.activeLabel);
    const [localCards, setLocalCards] = useState([]);
    const fullscreenCard = useSelector((state) => state.fullscreenToggle.fullscreen);
    const switcherFolder = useSelector((state) => state.auth.user.switcherFolder)
    const allLabels = useSelector((state) => state.cards.labels);
    const searchCards = useSelector((state) => state.search.searchCards)



    useEffect(() => {
        dispatch(getCardIds());
        dispatch(getAllCards());
        // dispatch(getPaginatedCards({ limit: 10, offset }));
    }, [dispatch]);

    useLayoutEffect(() => {
    }, [localCards])


    useEffect(() => {
        let filteredCards;
        switch (activeLabel) {
            case 'allCards':
                filteredCards = allCards;
                break;
            case 'isFavorite':
                filteredCards = allCards.filter(item => item.isFavorite === true);
                break;
            default:
                filteredCards = allCards.filter(item => item.labels.includes(activeLabel));
                break;
        }
        if(searchCards===null){

            setLocalCards(filteredCards);
        }else{
            setLocalCards(searchCards);
        }
    }, [activeLabel,searchCards, allCards]);

    const handlerChangeLabel = (label) => {
        // console.log('handlerIsFavorite', label)
        dispatch(addLabelAction(label))
    }



    return (
        <WrapperHomePage>
            {/*{isMobile ? <AddCardMobiComponent/> : <AddCardFsComponent/>}*/}
            <AddCardFsComponent/>
            {/*<WrapperMobAddCardComponent/>*/}
            {
                fullscreenCard && <FullscreenCardComponent/>
            }
            <WrapperCards
                sx={{
                    gridTemplateColumns: switcherFolder === 'todo' && '1fr !important'
                }}
            >
                {
                    switcherFolder !== 'folder' ?
                        (localCards.map((card) => (
                            <Box
                                // draggable='true'
                                key={card.id}
                                sx={{
                                    height: '200px',
                                    overflow: 'hidden',
                                    boxShadow: `var(--box-shadow)`,
                                    borderRadius: '12px'
                                }}
                            >
                                <CardComponent
                                    i={card}
                                    sx={{padding: '1px'}}
                                />
                            </Box>
                        )))
                        : (
                            <>
                                <FolderComponent key={'No_label'} label={'No label'}
                                                 handlerChangeLabel={handlerChangeLabel}/>
                                <FolderComponent key={'Is_Favorite'} label={'Is Favorite'}
                                                 handlerChangeLabel={handlerChangeLabel}/>
                                {allLabels.map((label, index) => (
                                    <FolderComponent key={`${label}-${index}`} label={label}
                                                     handlerChangeLabel={handlerChangeLabel}/>
                                ))}
                            </>
                        )
                }
            </WrapperCards>

        </WrapperHomePage>
    )
        ;
};

export default HomePage;
