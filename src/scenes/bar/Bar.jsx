
import BarChart from '../../components/BarChart'
import { Box } from '@mui/system'
import Header from '../../components/Header'

const Bar = () => {
  return (
    <Box m='1.2rem'>
      <Header title='Bar Chart' subtitle='Simple Bar Chart'/>

      <Box height='74vh'>
         <BarChart/>
      </Box>
    </Box>
  )
}

export default Bar