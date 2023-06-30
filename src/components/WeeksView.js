import * as React from 'react'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import WeeksData from './../constants/weeks'
const Weeks = () => {
    const data = WeeksData
    return (
        <List component="div" disablePadding>
            {data.map((product) =>
            (
                <ListItem>
                    <Box sx={{
                        bgcolor: 'background.paper',
                        borderColor: 'text.primary',
                        m: 1,
                        border: 1,
                        width: '100%',
                        padding: 2, borderRadius: 1
                    }} >
                        <Typography variant="subtitle1" gutterBottom>
                            {product.time}
                        </Typography>
                        {product.data.map((info) => (

                            info.link ?
                                <Link href={info.link}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        {info.title}
                                    </Typography>
                                </Link> :
                                <Typography variant="subtitle1" gutterBottom>
                                    {info.title}
                                </Typography>

                        ))}
                    </Box>
                </ListItem>))}
        </List>
    )
}
export default Weeks