import * as React from 'react'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ProductData from './../constants/product.js'
const Product = () => {
    const data = ProductData
    return (
        <List component="div" disablePadding>
            {data.map((product) =>
            (
                <ListItem>
                    <Link href={product.link}>
                        <Typography variant="subtitle1" gutterBottom>
                            {product.title}
                        </Typography>
                    </Link>
                </ListItem>
            )
            )}
        </List>
    )
}
export default Product