import { Outlet } from "react-router-dom"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from "../../components/Svg/Logo";
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { KPI } from "../../components/Svg/Sidebar";
import { useNavigate, useLocation } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '9rem',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = React.useState('/kpi')

  console.log()
  React.useEffect(() => {
    setCurrentLocation("/" + location.pathname.split('/')[1])
  }, [location])

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleAccountClick = () => {
    handleMenuClose();
    navigate('/account');
  };
  
  const handleSettingsClick = () => {
    handleMenuClose();
    navigate('/settings');
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        top: "3%",
      }}
    >
      <MenuItem onClick={handleAccountClick}>Tài Khoản</MenuItem>
      <MenuItem onClick={handleSettingsClick}>Cài Đặt</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Logo />
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <DarkModeIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "4rem",
            backgroundColor: "#CDE7EC",
          }}
        >
          <Box sx={{
            maxWidth: "10rem",
            minWidth: "10rem",
            position: "fixed",
            zIndex: "1",
            height: "100%"
          }}>
            <Paper 
              elevation={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
                height: "100%",
                paddingTop: "1.5rem",
                borderRadius: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.3rem"
                }}
              >
                <Button
                  sx={{
                    color: "black",
                    backgroundColor: () => currentLocation == '/kpi' ? "#9EEFFD" : "#FFFFFF",
                    '&:hover': {
                      backgroundColor: "#9EEFFD"
                    }
                  }}
                  onClick={() => navigate('/kpi')}
                >
                  <KPI />
                </Button>
                <Typography variant="body1">
                  KPI
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.3rem"
                }}
              >
                <Button
                  sx={{
                    color: "black",
                    backgroundColor: () => currentLocation == '/task' ? "#9EEFFD" : "#FFFFFF",
                    '&:hover': {
                      backgroundColor: "#9EEFFD"
                    }                    
                  }}
                  onClick={() => navigate('/task')}
                >
                  <WorkOutlineRoundedIcon />
                </Button>
                <Typography variant="body1">
                  Công việc
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.3rem"
                }}
              >
                <Button
                  sx={{
                    color: "black",
                    // backgroundColor: () => currentLocation == '/news' ? "#9EEFFD" : "#FFFFFF",
                    // '&:hover': {
                    //   backgroundColor: "#9EEFFD"
                    // }
                  }}
                  onClick={() => navigate('/kpi')}
                >
                  <ArticleOutlinedIcon />
                </Button>
                <Typography variant="body1">
                  Bảng tin
                </Typography>
              </Box>
            </Paper>
          </Box>
          <Box
            sx={{
              marginLeft: "13.5rem",
              marginRight: "2.5rem",
              marginTop: "2rem",
              maxWidth: "103rem",
              minWidth: "103rem",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout