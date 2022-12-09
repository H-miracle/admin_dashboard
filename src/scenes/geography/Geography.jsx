import GeographyChart from "../../components/GeographyChart"
import Header from "../../components/Header"
import { Box } from "@mui/material"
import {useTheme} from "@mui/material"
import { tokens } from "../../theme"

const Geography = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
  return (
    <Box m='1.2rem'>
      <Header title='Geolocation Chart' subtitle='Simple Geolocation Chart'/>
      <Box 
         height='70vh'
         border={`1px solid ${colors.grey[100]}`}
      >
         <GeographyChart/>
      </Box>
   </Box>
  )
}

export default Geography