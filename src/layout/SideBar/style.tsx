import { styled, Button } from "@mui/material";

export const AsideForMen = styled("aside")(({ theme }) => ({
    gridArea: "navigation",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    width: "100%",
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
}));
export const ButtonAside = styled(Button)(({ theme }) => ({
    border: "none",
    color: "white",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    ":first-child": {
        display: "none"
    },
    [theme.breakpoints.down("sm")]: {
        ":first-child": {
            display: "flex"
        },
        "& .MuiTypography-root": {
            display: "none"
        }
    }
}));
