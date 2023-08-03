import { Toolbar, styled } from "@mui/material";

export const ContainerFooter = styled("footer")(({ theme }) => ({
    position: "sticky",
    gridArea: "footer",
    boxSizing: "border-box",
    zIndex: "1100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "64px",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
}));

export const ToolbarFooter = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
});
