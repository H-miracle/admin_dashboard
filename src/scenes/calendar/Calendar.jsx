import React from 'react'
import {useState} from 'react'
import FullCalendar, { formatDate} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box, List, Typography, ListItem, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'


const Calendar = () => {

   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const [currentEvents, setCurrentEvents] = useState([])

   

  return (
    <Box mx='20px'>
      <Header title='Calendar' subtitle='schedule your events ' />
      
    </Box>
  )
}

export default Calendar