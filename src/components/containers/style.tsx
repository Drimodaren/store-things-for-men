import { styled, Box } from "@mui/material";

export const AppBox = styled(Box)(({ theme }) => ({
    height: "100vh",
    display: "grid",
    gap: 1,
    gridTemplateColumns: "2fr 12fr",
    gridTemplateRows: "3rem 1fr 3rem",
    gridTemplateAreas: `"header header" "navigation main" "footer footer"`,
    [theme.breakpoints.down("sm")]: {
        gridTemplateAreas: `"header header" "main main" "navigation navigation" "footer footer"`,
        gridTemplateRows: "3rem 1fr 3rem 3rem"
    }
}));
