import PieChart from "../../components/PieChart"
import { Box } from "@mui/material"

import Header from "../../components/Header"

const Pie = () => {

  return (
    <Box m='1.2rem'>
      <Header title='Pie Chart' subtitle='View Pie Chart'/>
      <Box height='75vh'>
         <PieChart />
      </Box>
    </Box>
  )
}

export default Pie