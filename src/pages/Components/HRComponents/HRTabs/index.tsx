import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HRTableComponent from '../HRTable';

interface TabProps {
    tabNames: string[]; // Names of the tabs
}

const TabsComponent: React.FC<TabProps> = ({ tabNames }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const routes = [
        { path: "/superAdmin/hr-addemployees" },
        { path: "/superAdmin/hr-adddepartment" },
        { path: "/superAdmin/hr-addcenter" }
    ];

    const handleAddNew = () => {
        // Handle adding a new item based on the current tab name
        console.log(`Adding new ${tabNames[value]}`);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    {tabNames.map((name, index) => (
                        <Tab
                            key={index}
                            label={name}
                            
                        />
                    ))}
                </Tabs>
            </Grid>
            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {tabNames[value]}
                        </Typography>
                        <Link to={routes[value].path} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button color="inherit">
                                Add New {tabNames[value]}
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={12}> 
                <HRTableComponent />
            </Grid>
        </Grid>
    );
};

export default TabsComponent;
