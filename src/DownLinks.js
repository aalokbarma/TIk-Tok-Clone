import React from 'react';
import './DownLinks.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import {NavLink} from 'react-router-dom';


const DownLinks = () => {
    return (
        <div className = "downLinks__main">
            <div className = "downLinks__icons" >

                <HomeIcon className = "icons" />
                <SearchIcon type = 'submit' className = "icons" />
                <div className ="div__back1">  </div>
                <AddBoxIcon className = "add__btn icons" />
                <div className ="div__back2"></div>
                <ListAltIcon className = "icons" />
                <PersonIcon className = "icons" />

            </div>
        </div>
    )
}

export default DownLinks;
