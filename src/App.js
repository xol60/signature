import logo from './logo.png';
import './App.css';
import * as React from 'react';
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
import Box from '@mui/material/Box';
import Product from './components/ProductView'
import Reference from './components/ReferenceView';
import Weeks from './components/WeeksView';
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
        <Box
          component="img"
          sx={{
            height: 100,
            width: 200,
          }}
          src={logo}
        />
        <ListItemButton onClick={handleClick}>

          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Tổng hợp các thông tin liên quan" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} sx={{ padding: 2, marginLeft: 5 }} timeout="auto" unmountOnExit>
          <Product />
        </Collapse>
        <ListItemButton onClick={handleClick1}>

          <ListItemIcon>
            <DatasetLinkedIcon />
          </ListItemIcon>
          <ListItemText primary="Tài liệu nộp" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" sx={{ padding: 2, marginLeft: 5 }} unmountOnExit>
          <Reference />
        </Collapse>
        <ListItemButton onClick={handleClick2}>

          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary="Cập nhật quá trình" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} sx={{ padding: 2, marginLeft: 2 }} timeout="auto" unmountOnExit>
          <Weeks />
        </Collapse>
      </List>
    </div >
  );
}

export default App;
