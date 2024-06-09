import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton"
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentCard = () => {
    return (
        <Stack className="top-agent-card">
            <Box 
            className="card-img">
                <img src="/img/profile/girl.svg" alt="" />

            <Box className="info">
            <strong>Lily</strong>
            <span>Agent</span>
                <Divider sx={{ mt: "8px", mb: "7px" }} />
                <div className="bott">
                    
                    <p>rent</p>
                    <div className="view-like-box">
                        <IconButton color="default">
                            <RemoveRedEyeIcon />
                        </IconButton>
                        <Typography className="view-cnt">50</Typography>
                        <IconButton color="default">
                            <FavoriteIcon style={{ color: "red" }} />
                        </IconButton>
                        <Typography className="view-cnt">250</Typography>
                    </div>
                </div>
            </Box>
            </Box>
        </Stack>
    );
};

export default TopAgentCard;