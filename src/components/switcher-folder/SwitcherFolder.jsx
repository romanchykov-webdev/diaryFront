import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {WrapperFolder} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {switcherFolderAction} from "./SwitcherFolderSlice";

const SwitcherFolder = () => {

    const dispatch = useDispatch();
    const switcher = useSelector((state) => state.switcherFolder.switcherFolder)


    function handlerSwitcher() {
        switch (switcher) {
            case 'tile':
                dispatch(switcherFolderAction('todo'));
                break
            case 'todo':
                dispatch(switcherFolderAction('folder'));
                break
            case 'folder':
                dispatch(switcherFolderAction('tile'));
                break

        }
    }

    const renderIcon = () => {
        switch (switcher) {
            case 'tile':
                return <GridViewIcon/>
            case 'todo':
                return <FormatListBulletedIcon/>
            case 'folder':
                return <FolderIcon/>
            default:
                return <GridViewIcon/>

        }
    }

    return (
        <WrapperFolder onClick={handlerSwitcher}>
            {renderIcon()}
        </WrapperFolder>
    );
};

export default SwitcherFolder;