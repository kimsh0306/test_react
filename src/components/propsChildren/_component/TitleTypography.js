import React from 'react';
import { Typography } from '@material-ui/core';

const TitleTypography = (props) => {
  return (
    <Typography 
      color={props.color}
      variant="h6"
      // aline="center"
      // display='inline'
    >
      {props.children}
    </Typography>
  );
};

export default TitleTypography;