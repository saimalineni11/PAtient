import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Form from 'react-bootstrap/Form'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        aria-label="PopHealth Filters"
        className={classes.tabs}
      >
        <Tab label="General" {...a11yProps(0)} />
      </Tabs>
      
      <TabPanel value={value} index={0} style={{width: "100%"}}>
        <Form.Row>
            <Form.Label column lg={2}>
            Group
            </Form.Label>
            <Col xs={4}>
                <Form.Control as="select">
                    <option>Group1</option>
                    <option>Group2</option>
                </Form.Control>
            </Col>
        </Form.Row>
        <Form.Row>
            <Form.Label column lg={2}>
            Program
            </Form.Label>
            <Col xs={4}>
                <Form.Control as="select">
                    <option>Program1</option>
                    <option>Program2</option>
                </Form.Control>
            </Col>
        </Form.Row>
        <Form.Row>
            <Form.Label column lg={2}>
            LOB
            </Form.Label>
            <Col xs={4}>
                <Form.Control as="select">
                    <option>LOB1</option>
                    <option>LOB2</option>
                </Form.Control>
            </Col>
        </Form.Row>
        <Form.Row>
            <Form.Label column lg={2}>
            Product
            </Form.Label>
            <Col xs={4}>
                <Form.Control as="select">
                    <option>Product1</option>
                    <option>Product2</option>
                </Form.Control>
            </Col>
        </Form.Row>
      </TabPanel>
    </div>
  );
}