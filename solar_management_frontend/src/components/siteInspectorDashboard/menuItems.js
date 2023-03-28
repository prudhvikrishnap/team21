//import menu designs & content
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import axios from "axios";

const handleLogout = () => {
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}logout`,
        withCredentials: true,
    })
        .then((res) => {
            localStorage.removeItem("token");
            window.location.href = "/"; // Navigate to the login page
        })
        .catch((err) => {
            console.log(err);
        });
};

export const mainListItems = (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <Link to="/" href="#" sx={{ mt: 3 }}>
                <ListItemButton sx={{ color: "primary.main" }}>
                    <ListItemIcon>
                        <HomeIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </Link>
        </React.Fragment>
    </ThemeProvider>
);

export const secondaryListItems = (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <ListItemButton sx={{ mt: 40 }} onClick={handleLogout}>
                <ListItemIcon>
                    <LogoutIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </React.Fragment>
    </ThemeProvider>
);
