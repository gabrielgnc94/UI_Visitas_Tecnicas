import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
container: {
    marginTop: theme.spacing(5),
    backgroundColor: "black",
    // height: "100vh"

},
paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
},
}));

export default function Homepage() {
    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={classes.container}>
            <Grid container spacing={1} justify="center">
                <Grid item xs={12} sm={3} >
                <Paper className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                    Produtor: Gabriel do Nascimento
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Propriedade: Fazenda Água Limpa
                </Typography>
                </Paper>
                <Box marginTop={1}>
                <Paper className={classes.paper}>
                <Button 
                variant="contained" 
                color="primary"
                endIcon={<AddIcon />}
                >
                Adicionar visita técnica
                </Button>
                </Paper>
                </Box>
                </Grid>
                <Grid item xs={12} sm={8} >
                <Paper className={classes.paper}>
                    Lista de vivistas tecnincas
                </Paper>
                </Grid>
                {/* <Grid item xs={12} sm={3} >
                <Paper className={classes.paper}>
                    Lista de vivistas tecnincas
                </Paper>
                </Grid> */}
            </Grid>
        </Container>
    )
}
