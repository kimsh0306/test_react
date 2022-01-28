import React from 'react';
import { 
  Typography,
  makeStyles,
  Box 
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: "right",
    backgroundColor: "#cfd8dc",
    width: "200px",
    height: "150px"
    // maxWidth: 500,
  }
})

const Dummy = (props) => {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.root}>
        <Typography 
          color="primary" 
          align="center" 
          variant="h6"
          fontWeight="fontWeightMedium"
        >
          Dummy Component</Typography>
        <Typography variant="body1">{props.name}</Typography>
        <Typography variant="button" display="block">{props.age}</Typography>
        <Typography variant="caption"display="block">{props.hobby}</Typography>
        
      </div>
      <Typography component="div">
        <Box 
          fontWeight="fontWeightLight" 
          fontSize="fontSize"
          textAlign="left" 
        >
          Light
        </Box>
        <Box 
          fontWeight={500} 
          fontSize="body2.fontSize"
          textAlign="center" 
        >
          500
        </Box>
        <Box 
          fontWeight="fontWeightBold" 
          fontSize={10}
          textAlign="right" 
        >
          Bold
        </Box>
      </Typography>
    </div>
  );
};

export default Dummy;