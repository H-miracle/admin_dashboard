import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {

   const theme = useTheme()
   const colors = tokens(theme.palette.mode)

  return (
    <Box m='1.2rem'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page'/>

      <Accordion sx={{ background: colors.blueAccent[800]}}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
               What is this project about 
            </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error minima tenetur necessitatibus sequi possimus quia.
            </Typography>
         </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background: colors.blueAccent[800]}}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
               How can I view team members? 
            </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error minima tenetur necessitatibus sequi possimus quia.
            </Typography>
         </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background: colors.blueAccent[800]}}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
               Why am I getting errors filling the form? 
            </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error minima tenetur necessitatibus sequi possimus quia.
            </Typography>
         </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background: colors.blueAccent[800]}}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
               How can I adjust event dates on the calendar?  
            </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error minima tenetur necessitatibus sequi possimus quia.
            </Typography>
         </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background: colors.blueAccent[800]}}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
               I am confused about the Geolocation chart
            </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error minima tenetur necessitatibus sequi possimus quia.
            </Typography>
         </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background: colors.blueAccent[800]}}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
               How can I export my data to excel? 
            </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error minima tenetur necessitatibus sequi possimus quia.
            </Typography>
         </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background: colors.blueAccent[800]}}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
               An Important question 
            </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error minima tenetur necessitatibus sequi possimus quia.
            </Typography>
         </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ