import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";


const Navbar = () => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");

    const navLinks = [
        {
            label: "Dashboard",
            key: "dashboard",
            link: "/"
        },
        {
            label: "Predictions",
            key: "predictions",
            link: "/predictions"
        },
    ]

    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
            {/* LEFT SIDE */}
            <FlexBetween gap="0.75rem">
                <PixIcon sx={{ fontSize: "28px" }} />
                <Typography variant="h4" fontSize="16px">
                    Finanseer
                </Typography>
            </FlexBetween>

            {/* RIGHT SIDE */}
            <FlexBetween gap="2rem">
                {/* Navigation Links */}
                {navLinks.map((link) => (
                    <Box key={link.key} sx={{ "&:hover": { color: "#d0fcf4" } }}>
                        <Link
                            to={link.link}
                            onClick={() => setSelected(link.key)}
                            style={{
                                color: selected === link.key ? "inherit" : palette.grey[700],
                                textDecoration: "inherit",
                            }}
                        >
                            {link.label}
                        </Link>
                    </Box>
                ))}
            </FlexBetween>
        </FlexBetween>
    );
};

export default Navbar;
