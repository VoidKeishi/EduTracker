import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function DailyTask() {
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
          Dạy học
        </Typography>
        <Typography
          variant='body1'
        >
          D9- 401
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
          8h - 10h
        </Typography>
      </Box>
    </Box>
  )
}

export default DailyTask