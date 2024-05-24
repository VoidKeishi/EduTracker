/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import StepA from './components/StepA';

const steps = ['Phương thức', 'Thông tin KPI', 'Thiết lập mục tiêu', 'Hoàn thành'];

function CreateKpi() {
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: "100%",
        padding: "4rem 10rem 3rem",
        borderRadius: "1rem",
      }}
    >
      <Box>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

      <Box
        sx={{
          width: "100%"
        }}
      >

      </Box>
        {
          activeStep == 0
          ? <StepA activeStep={activeStep} handleNext={handleNext} />
          : null
        }
    </Paper>
  )
}

export default CreateKpi