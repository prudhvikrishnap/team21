import * as React from "react";
import axios from "axios";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../salesDashboard/Title";

export default function SalesList() {
    const [salesTeam, setSalesTeam] = useState();
    async function GetSalesTeam() {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}getsalesteam`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await response.data;
            setSalesTeam(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        GetSalesTeam();
    }, []);

    if (!salesTeam) return <div>No Sales Team Member</div>;

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Container maxWidth="lg" sx={{ mt: 2 }}>
                    {/* On going projects */}
                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Title>Sales</Title>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Username</TableCell>
                                        <TableCell>Position</TableCell>
                                        <TableCell>Contact</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {salesTeam.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>
                                                {row.username}
                                            </TableCell>
                                            <TableCell>
                                                {row.position}
                                            </TableCell>
                                            <TableCell>{row.contact}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Container>
            </React.Fragment>
        </ThemeProvider>
    );
}
