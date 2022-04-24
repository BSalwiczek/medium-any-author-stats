import { Chip, Grid, Link, Typography } from "@mui/material";
import { ContactLink } from "./ContactLink";

export function Footer() {
    return (
        <Grid container item justifyContent={"space-around"}>
            <Chip variant="outlined" label={
            <Typography fontSize={12} >Enjoy? <Link href="https://medium.com/@bsalwiczek/membership" target="_blank" color="inherit">Buy medium mebership from referal</Link> to support!</Typography>
            } />
            <Chip variant="outlined" label={
            <Typography fontSize={12}><ContactLink /></Typography>
            } />
            <Chip variant="outlined" label={
            <Typography fontSize={12} >Made by Bartosz Salwiczek 
            (<Link href="https://medium.com/@bsalwiczek/how-to-develop-react-chrome-extension-for-medium-in-26-steps-d0401149e3a2" target="_blank" color="inherit">check out step-by-step article</Link>)
            </Typography>
            } />
        </Grid>
    )
}