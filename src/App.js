import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',

};
function App() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div className="App">
      <List
        sx={{
          width: '100%', maxWidth: 1300, bgcolor: '#white', color: 'blue', borderColor: 'black',
          m: '5%',
          border: 1, borderRadius: 1
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>

          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Tổng hợp các thông tin liên quan" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <Link href="https://drive.google.com/drive/folders/13k2e8wOEUsXUaO3brjPTX1q7SPvCf0d8">
                <Typography variant="subtitle1" gutterBottom>
                  Google Drive
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle1" gutterBottom>
                Phân công công việc
              </Typography>
            </ListItem>
            <ListItem>
              <Box
                sx={{
                  typography: 'body1',
                  '& > :not(style) + :not(style)': {
                    ml: 2,
                  },
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  Link họp hàng tuần  :
                </Typography>
                <Link href="https://meet.google.com/wct-cbmw-ara">
                  Meet
                </Link>
                <Link href="https://us04web.zoom.us/j/72907146065?pwd=fH3tedPXHNDaH5xCnxTchINHRdOdoM.1">
                  Zoom
                </Link>
              </Box>
            </ListItem>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick1}>

          <ListItemIcon>
            <DatasetLinkedIcon />
          </ListItemIcon>
          <ListItemText primary="Tài liệu nộp" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <Typography variant="subtitle1" gutterBottom>
                Sản phẩm
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick2}>

          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary="Cập nhật quá trình" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <Box component="span" sx={{ p: 2, border: '1px grey' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Tuần
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div >
  );
}

export default App;
