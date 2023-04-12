import React from "react";
import "../Header/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Storefront from "@mui/icons-material/Storefront";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
    return ( 
    <div className="header">

         <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="" />

            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search.."/>
            </div>

         </div>

         <div className="header__center">
            <div className="header__option header__option--active">
                <HomeIcon />
            </div>
            <div className="header__option">
                <FlagIcon />
            </div>
            <div className="header__option">
                <SubscriptionsIcon />
            </div>
            <div className="header__option">
                <Storefront />
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon />
            </div>
         </div>

         <div className="header__right">
            <div className="header__info">
                <Avatar src="https://randomuser.me/api/portraits/lego/3.jpg"/>
                <h5>Adrian</h5>
            </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

         </div>


    </div>
    );
}

export default Header;