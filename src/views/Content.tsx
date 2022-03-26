import { Card, CardContent, Checkbox, FormControlLabel, FormGroup, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import { Chart } from "../components/Chart";
import { Footer } from "../components/Footer";
import { StatisticsTable } from "../components/StatisticsTable";
import { Author } from "../types/Author";
import { BasicInfo } from "../components/BasicInfo";

interface ContentProps {
    author: Author
}

export function ContentView({ author }: ContentProps) {
    const [showResponses, setShowResponses] = useState<boolean>(true);
    const [showClaps, setShowClaps] = useState<boolean>(true);
    const [showClappers, setShowClappers] = useState<boolean>(true);

    return (
        <Grid container spacing={0.5} direction="column">
            <Grid container item>
                <Grid container spacing={0.5}>
                    <Grid item xs={5}>
                        <Card variant="outlined" sx={{height: "100%"}}>
                            <CardContent>
                                <BasicInfo author={author} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={7}>
                        <Card variant="outlined" sx={{height: "100%"}}>
                            <CardContent>
                                <StatisticsTable author={author} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Card variant="outlined">
                    <CardContent >
                        <Grid container>
                            <Grid item xs={9}>
                                <Chart posts={author.posts} showResponses={showResponses} showClaps={showClaps} showClappers={showClappers} />
                            </Grid>
                            <Grid item alignSelf={"center"} xs={3} pl={4}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked onClick={() => setShowClaps(!showClaps)} />} label={<Typography fontSize={14}>Claps 👏</Typography>} />
                                    <FormControlLabel control={<Checkbox defaultChecked onClick={() => setShowResponses(!showResponses)} />} label={<Typography fontSize={14}>Responses 💬</Typography>} />
                                    <FormControlLabel control={<Checkbox defaultChecked onClick={() => setShowClappers(!showClappers)} />} label={<Typography fontSize={14}>Clappers 👤</Typography>} />
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            
            <Footer />
        </Grid>
        
    );
}