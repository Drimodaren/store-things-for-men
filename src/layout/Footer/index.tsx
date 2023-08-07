import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Link, Typography } from "@mui/material";

import { ContainerFooter, ToolbarFooter } from "./style";

export const Footer = () => {
    return (
        <ContainerFooter>
            <ToolbarFooter>
                <Typography>Menshikov Andrey</Typography>
                <IconButton>
                    <Link color="inherit" href="https://github.com/Drimodaren/store-things-for-men">
                        {<GitHubIcon />}
                    </Link>
                </IconButton>
            </ToolbarFooter>
        </ContainerFooter>
    );
};
