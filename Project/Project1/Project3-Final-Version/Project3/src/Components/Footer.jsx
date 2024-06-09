import './Footer.css';
import { useTheme } from '@mui/material/styles';

function Footer(){
    const theme = useTheme();
    return(
        <footer>
            <p style={{ color: theme.palette.primary.dark }}>&copy; Volkswagen </p>
        </footer>
    );
}

export default Footer