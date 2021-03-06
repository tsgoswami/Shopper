import React from 'react'
import Product from '../../../components/product/Product';
import { Link } from 'react-router-dom';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
    root: {
        padding: '30px 0 30px 0px',
        backgroundColor: '#fce4ec',
        zIndex: -1,
    },
    featureText: {
        margin: '30px auto',
        color: 'rgba(0,0,0,0.863)',
        borderBottom: '5px solid #fce4ec'
    },
    linkStyle:{
        textDecoration: 'none',
    }
}))

function Featured() {
    const classes = useStyles();
    const featuredProducts = useSelector(state => state.products.products);

    return (
        <Grid container className={classes.root}>
            <Grid container justifyContent='center'>
                <Typography variant='h2' className={classes.featureText} gutterBottom>Featured Products</Typography>
            </Grid>
            <Grid container>
                <Grid item lg={1} xl={2}></Grid>
                <Grid item lg={10} xl={8}>
                    <Grid container justifyContent='center' spacing={3}>
                        {featuredProducts && featuredProducts.slice(0, 3).map((product) => (
                            <Grid item xs={12} lg={4} key={product.id} >
                                <Link className={classes.linkStyle} to={`/product/${product.id}`}>
                                    <Product id={product.id} name={product.name} company={product.company} price={product.price} image={product.image} />
                                </Link>
                            </Grid>
                        ))
                        }
                    </Grid>
                    <Grid item lg={1} xl={2}></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Featured;