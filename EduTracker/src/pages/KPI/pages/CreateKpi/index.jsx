/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React from 'react';
import StepA from './components/StepA';
import StepB from './components/StepB';
import StepC from './components/StepC';
import StepD from './components/StepD';

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
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step onClick={() => {
                if (activeStep > index) setActiveStep(index)
              }} key={label} {...stepProps}>
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
        {
          activeStep == 0
          ? <StepA activeStep={activeStep} handleNext={handleNext} />
          : activeStep == 1
          ? <StepB handleNext={handleNext} handleBack={handleBack} />
          : activeStep == 2
          ? <StepC handleNext={handleNext} handleBack={handleBack} />
          : <StepD handleBack={handleBack} />
        }
      </Box>
    </Paper>
  )
}

export default CreateKpi