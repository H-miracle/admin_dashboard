
import { MenuItem, Menu, ProSidebar } from 'react-pro-sidebar'
import { useState } from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import user from '../../assets/profile_pic.png'




const Sidebar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')


  return (
    <Box 
      sx={{
        // '& .pro-sidebar': {
        //   width: '15rem'
        // },
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`
          
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important'
        },
        '& .pro-inner-item': {
          padding: '5px 15px 5px 20px !important'
          
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important'
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important'
        },
      }}
      >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem 
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon ={isCollapsed ? <MenuOutlinedIcon/> : undefined}
            style={{
              margin: '20px 0 30px 0',
              color: colors.grey[100],
              
            }}
          >
            {!isCollapsed && (
              <Box 
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'
                
              >
                <Typography variant='h4' mr='20px' color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <CloseOutlinedIcon/>
                </IconButton>
              </Box>
            )}
          </MenuItem>
            
          {/* USER */}
          {!isCollapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img 
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  src={user}
                  style={{cursor: 'pointer', borderRadius: '50px'}}
                />
              </Box>
              <Box textAlign='center'>
                <Typography 
                  variant='h4'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{m: "10px 0 0 0 "}}
                >
                  Miracle H
                </Typography>
                <Typography 
                  variant="p"
                  color={colors.greenAccent[500]}
                > 
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar