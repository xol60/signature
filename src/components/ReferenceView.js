import * as React from 'react'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ReferenceData from './../constants/reference'
const Reference = () => {
    const data = ReferenceData
    return (
        <List component="div" disablePadding>
            {data.map((product) =>
            (
                <ListItem>
                    {product.link ?
                        <Link href={product.link}>
                            <Typography variant="subtitle1" gutterBottom>
                                {product.title}
                            </Typography>
                        </Link> : <Typography variant="subtitle1" gutterBottom>
                            {product.title}
                        </Typography>}
                </ListItem>
            )
            )}
        </List>
    )
}
export default Reference