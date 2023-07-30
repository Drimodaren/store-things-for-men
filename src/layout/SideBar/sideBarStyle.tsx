import { styled } from "@mui/material";

export const AsideForMen = styled("aside")(({ theme }) => ({
    display: "flex",
    gridArea: "navigation",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        "& .MuiList-root": {
            display: "flex"
        },
        "& .MuiListItemText-root": {
            display: "none"
        }
    }
}));
