import { Chip, Grid, Link, Typography } from "@mui/material";
import { ContactLink } from "./ContactLink";

export function Footer() {
    return (
        <Grid container item justifyContent={"space-between"}>
            <Chip variant="outlined" label={
            <Typography fontSize={12} >Enjoy? <Link href="https://medium.com/@bsalwiczek/membership" color="inherit">Buy medium mebership from referal</Link> to support!</Typography>
            } />
            <Chip variant="outlined" label={
            <Typography fontSize={12}><ContactLink /></Typography>
            } />
            <Chip variant="outlined" label={
            <Typography fontSize={12} >Made by Bartosz Salwiczek (<Link href="#" color="inherit">check out step-by-step article</Link>)</Typography>
            } />
        </Grid>
    )
}