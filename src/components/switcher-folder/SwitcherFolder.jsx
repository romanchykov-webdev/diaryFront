import React, {useState} from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {WrapperFolder} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {switcherFolderAction} from "./SwitcherFolderSlice";
import {getPublicUser, updateUserInfo} from "../../store/thunks/auth";

const SwitcherFolder = () => {

    const dispatch = useDispatch();
    const switcher = useSelector((state) => state.switcherFolder.switcherFolder)
    // const switcher = useSelector((state) => state.auth.user.switcherFolder)
    // const userData = useSelector(state => state.auth?.user);
    const userData = useSelector(state => state.auth.user);
    const [newUserName] = useState(userData.userName)
    const switcherUser = userData.switcherFolder
    // console.log('userData.switcherFolder',userData.switcherFolder)

    function handlerSwitcher() {
        // eslint-disable-next-line default-case
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
        const updateUser = {
            "userName": newUserName === undefined || '' ? userData.userName : newUserName,
            "email": userData.email,
            "language": userData.language,
            "themeModeDevice": userData.themeModeDevice,
            "popupForNewUser": userData.popupForNewUser,
            "avatar": userData.avatar,
            "switcherFolder": switcher,
            "colors":userData.colors,

        }
        console.log(updateUser)
        dispatch(updateUserInfo(updateUser))
        dispatch(getPublicUser());
    }

    const renderIcon = () => {
        switch (switcherUser) {
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