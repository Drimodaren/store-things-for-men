import { AppBar, Toolbar, styled } from "@mui/material";

// export const ContainerFooter = styled("footer")(({ theme }) => ({
//     position: "sticky",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     border: "solid",
//     minHeight: "64px",
//     width: "100%",
//     backgroundColor: theme.palette.primary.main
// }));

export const ContainerFooter = styled(AppBar)({
    position: "sticky"
});
export const ToolbarFooter = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});
