import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

const LogOut = ({ setIsLogin }) => {
    const handleLogOutClick = () => {
        try {
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
            setIsLogin(false);
            console.log('Log out successfully');
        }
        catch (error) {
            console.error(error);
        };
    };
    return (
        <MenuItem key={3} onClick={handleLogOutClick}>
            <Typography textAlign="center">Log out</Typography>
        </MenuItem>
    )
};

export default LogOut;
