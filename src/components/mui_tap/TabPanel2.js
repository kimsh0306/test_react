import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SummaryTap from './tabPanel2_component/SummaryTap';
import ProcessorsTap from './tabPanel2_component/ProcessorsTap';
import MemoryTap from './tabPanel2_component/MemoryTap';
import NetworkTap from './tabPanel2_component/NetworkTap';

const TabPanel2 = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  function a11yProps(index) {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Processors" {...a11yProps(1)} />
          <Tab label="Memory" {...a11yProps(2)} />
          <Tab label="Network" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <SummaryTap/>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <ProcessorsTap/>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <MemoryTap/>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <NetworkTap/>
      </TabPanel>
    </div>
  );
};

export default TabPanel2;