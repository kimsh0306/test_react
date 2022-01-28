import React from 'react';
import Dummy from './_component/Dummy';
import OuterBox from './_component/OuterBox';
import TitleTypography from './_component/TitleTypography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import { 
  Grid, 
  Paper 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    width:160,
    height: 100,
    backgroundColor: "lightblue",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper2: {
    width:160,
    height: 60,
    backgroundColor: "lightgreen",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
  }
}));

const PropsChildren = () => {
  const classes = useStyles();
  const propsObj = {
    age: 22,
    hobby: "Soccer"
  };
  return (
    <div>
      <div style={{ height: "130px", backgroundColor: "grey" }}>
        <Grid container
          // height="300px"
          direction='row'
          justifyContent='space-around'
          alignItems='center'
        // alignContent='center'
        >
          <Grid item>
            <Paper className={classes.paper}
              // square
              component={'div'}
              variant='outlined'
            >
              <TitleTypography color="primary">
                menu 1
              </TitleTypography>
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper2}
              square
              component={'div'}
              variant='outlined'
            >
              <TitleTypography color="error">
                menu 2
              </TitleTypography>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Grid container
        direction='column'
        // justifyContent='center'
        alignItems='center'
      >
        <OuterBox>
          <Dummy name="Mike" age="20" hobby="baseball" />
        </OuterBox>
        {/*
        props는 object이기 때문에,,, 
        값이 같은 props를 먼저 별도의 object로 선언하고 
        ...propsObj => 이렇게 object를 펼쳐주었다.
        */}
        <Dummy name="Jane" {...propsObj} />
        <Box
          width="30%"
          height={100}
          bgcolor="grey.300"
          // textAlign="right"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize={14}
          fontWeight="fontWeightBold"
          fontStyle="italic"
          letterSpacing={10}
          lineHeight={2}
        >
          box
        </Box>
      </Grid>
    </div>
  );
};

export default PropsChildren;