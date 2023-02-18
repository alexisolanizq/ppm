import { styled, Switch } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Annuities from '@Pages/catalogs/attrByCountry/stepFiles/Annuities';
import BackgroundTest from '@Pages/catalogs/attrByCountry/stepFiles/BackgroundTest';
import FilingRequirements from '@Pages/catalogs/attrByCountry/stepFiles/FilingRequirements';
import GeneralData from '@Pages/catalogs/attrByCountry/stepFiles/GeneralData';
import MultiDependency from '@Pages/catalogs/attrByCountry/stepFiles/MultiDependency';
import NounStage from '@Pages/catalogs/attrByCountry/stepFiles/NounStage';
import Opposition from '@Pages/catalogs/attrByCountry/stepFiles/Opposition';
import PCT from '@Pages/catalogs/attrByCountry/stepFiles/PCT';
import PPH from '@Pages/catalogs/attrByCountry/stepFiles/PPH';
import PremilimaryTest from '@Pages/catalogs/attrByCountry/stepFiles/PremilimaryTest';
import PriorDisclouser from '@Pages/catalogs/attrByCountry/stepFiles/PriorDisclouser';
import ProcedureDuration from '@Pages/catalogs/attrByCountry/stepFiles/ProcedureDuration';
import ProtectionTerms from '@Pages/catalogs/attrByCountry/stepFiles/ProtectionTerms';
import Publication from '@Pages/catalogs/attrByCountry/stepFiles/Publication';
import RightsReinstatement from '@Pages/catalogs/attrByCountry/stepFiles/RightsReinstatement';
import VoluntaryAmendment from '@Pages/catalogs/attrByCountry/stepFiles/VoluntaryAmendment';

const useAttrByCountry = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [priorDisclouserSwitch, setPriorDisclouserSwitch] = useState(false);
  const { control, watch } = useForm();

  const steps = [];
  for (let i = 0; i < 16; i+=1) {
    steps.push(i);
  }

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((_step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 32,
    height: 20,
    padding: 2,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)'
      }
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 17,
      height: 17,
      borderRadius: 8,
      transition: theme.transitions.create(['width'], {
        duration: 200
      })
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark'
          ? 'rgba(255,255,255,.35)'
          : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box'
    }
  }));

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <GeneralData control={control} />;
      case 1:
        return (
          <PriorDisclouser
            AntSwitch={AntSwitch}
            control={control}
            watch={watch}
          />
        );
      case 2:
        return <FilingRequirements control={control} AntSwitch={AntSwitch} />;
      case 3:
        return <PCT AntSwitch={AntSwitch} control={control} />;
      case 4:
        return <PremilimaryTest AntSwitch={AntSwitch} control={control} />;
      case 5:
        return <Publication AntSwitch={AntSwitch} control={control} />;
      case 6:
        return <Opposition AntSwitch={AntSwitch} control={control} />;
      case 7:
        return <BackgroundTest AntSwitch={AntSwitch} control={control} />;
      case 8:
        return <Annuities AntSwitch={AntSwitch} control={control} />;
      case 9:
        return <ProtectionTerms control={control} />;
      case 10:
        return <ProcedureDuration control={control} />;
      case 11:
        return <VoluntaryAmendment control={control} />;
      case 12:
        return <MultiDependency AntSwitch={AntSwitch} control={control} />;
      case 13:
        return <PPH AntSwitch={AntSwitch} control={control} />;
      case 14:
        return <RightsReinstatement control={control} />;
      case 15:
        return <NounStage AntSwitch={AntSwitch} control={control} />;
      default:
        return 'Error';
    }
  };

  return {
    allStepsCompleted,
    handleNext,
    handleBack,
    handleStep,
    handleComplete,
    handleReset,
    totalSteps,
    activeStep,
    completed,
    steps,
    completedSteps,
    setActiveStep,
    getStepContent,
    priorDisclouserSwitch,
    setPriorDisclouserSwitch,
    watch,
  };
};

export default useAttrByCountry;
