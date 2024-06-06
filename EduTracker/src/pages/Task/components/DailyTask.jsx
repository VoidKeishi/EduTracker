import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function DailyTask(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        marginBottom: "0.5rem",
        marginTop: "0.5rem"
      }}
    >
      <Box>
        <Typography
          variant='body1'
        >
          {props.taskName}
        </Typography>
        <Typography
          variant='body1'
        >
          {props.taskLocation}
        </Typography>
      </Box>
      <Box
        sx={{
          alignSelf: "center"
        }}
      >
        <Typography
          variant='body1'
        >
          {props.taskTime}
        </Typography>
      </Box>
    </Box>
  )
}

export default DailyTask