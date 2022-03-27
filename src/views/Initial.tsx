import { Link, Typography } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { Footer } from "../components/Footer";

interface InitialProps {
    loadData: () => void
}

export function InitialView(props: InitialProps) {
    return (
        <>
            <div className="center-view">
                <Typography variant="h4" component="h4">
                    Medium Any Author Stats
                </Typography>
                <br />
                <Typography style={{ width: "400px", textAlign: "center" }}>
                    Visit any <Link color="inherit" target="_blank" href="https://medium.com/@bsalwiczek">author's home page</Link> on 
                    Medium and click a button to see their detailed statistics
                </Typography>
                <br />
                <Button size="large" variant="contained" color="success" onClick={props.loadData}>
                    Load author data
                </Button>
            </div>
            <div style={{ marginTop: "-31px" }} >
                <Footer />
            </div>
        </>
    );
}