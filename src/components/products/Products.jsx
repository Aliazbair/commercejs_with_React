import React from 'react';
import Product from './product/Product'
import {Grid} from '@material-ui/core'
import useStyles from './styles'


const Products = ({products}) => {
    const classes=useStyles()
    return (
        <main className={classes.content}>
            <Grid container justify="center" spacing={4} className={classes.toolbar}>
                {products.map(product=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}

            </Grid>
        </main>
    );
}

export default Products;
