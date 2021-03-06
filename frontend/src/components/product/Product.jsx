import React from 'react'
import { makeStyles, Grid, Card, CardContent, CardActions, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '100%',
        minHeight: '100%',
        border: '2px solid #FAFAFA',
    },
    name: {
        textTransform: 'capitalize',
    },
    company: {
        textTransform: 'capitalize',
        color: '#d81b60'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    image: {
        width: '100%',
        height: '200px',
    }
}))

function Product({ name, company, price, image }) {
    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={0}>
            <CardContent>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justifyContent='center'>
                            <img src={image} alt="product" className={classes.image} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent='space-between'>
                            <Typography variant='h5' className={classes.name}>{name}</Typography>
                        </Grid>
                        <Grid container justifyContent='flex-start'>
                            <Typography variant='subtitle1' className={classes.company} gutterBottom>{company}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardActions}>
                    <Typography variant='h5' className={classes.name}>${price}</Typography>
            </CardActions>
        </Card>

    )
}

export default Product
