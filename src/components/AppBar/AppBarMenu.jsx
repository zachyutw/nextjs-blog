import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';



const menu= {
    profile:{text:'Profile', ['data-testid']:'profile'},
    myAccount:{text:'My account', ['data-testid']:'myAccount'}
}

 

export const AppBarMenu = ({ onClose = () => {}, anchorEl, open, id }) => {
    const { profile,myAccount } = menu;
    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={id}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={onClose}
        >
            <MenuItem onClick={onClose} data-testid={profile["data-testid"]}>{profile.text}</MenuItem>
            <MenuItem onClick={onClose} data-testid={myAccount["data-testid"]}>{myAccount.text}</MenuItem>
        </Menu>
    );
};

export const AppBarMenuMobile = ({ onClose = () => {},onOpen = ()=>{}, anchorEl, open, id }) => {
    const { profile,myAccount } = menu;
    return (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={id}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={onClose}
    >
        <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
            >
                <Badge badgeContent={11} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={onClose}>
            <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <p>{profile.text}</p>
        </MenuItem>
        <MenuItem>
            <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
            >
                <SettingsIcon />
            </IconButton>
            <p>{myAccount.text}</p>
        </MenuItem>
    </Menu>
    );
};

export default AppBarMenu;