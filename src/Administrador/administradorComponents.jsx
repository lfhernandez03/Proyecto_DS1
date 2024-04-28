import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'; // Corregir la importación de MenuItem
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';

export function BasicMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {props.name}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem component={Link} to={props.link1} onClick={handleClose}>
                    {props.option1}
                </MenuItem>
                <MenuItem component={Link} to={props.link2} onClick={handleClose}>
                    {props.option2}
                </MenuItem>
            </Menu>
        </div>
    );
}

export function ButtonLink(props) {
    return (
        <Link
            component="button"
            variant="body2"
            to={props.to} // Use `to` instead of `href`
            onClick={() => {
                // Add any onClick functionality here if needed
            }}
        >
            {props.children}
        </Link>
    );
}

export function ButtonAdmin(props) {
    return (
        <Button
            type={props.type}
            value={props.value}
            style={{ marginTop: "25px", backgroundColor: "white", color: "black", borderColor: "black" }}
            variant="outlined"
        >
            {props.label}
        </Button>
    );
}
