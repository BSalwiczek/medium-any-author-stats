import { Alert, AlertTitle } from "@mui/material";
import { ContactLink } from "../components/ContactLink";

export function ErrorView() {
    return (
        <div className="center-view">
            <Alert severity="error" variant="filled">
                <AlertTitle>Error occured while loading data</AlertTitle>
                Try to:
                <ul>
                    <li>Make sure you are running the script on medium user page. (eg. https://medium.com/@bsalwiczek)</li>
                    <li>Reload website.</li>
                    <li>Reopen addon popup</li>
                    <li>Reinstal extension.</li>
                </ul>
                <br />
                Still getting an error? <ContactLink />
            </Alert>
        </div>
    );
}