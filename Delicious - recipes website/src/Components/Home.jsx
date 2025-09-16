import '../css/Home.css'
import Typography from '@mui/material/Typography';
import useTitle from '../Hooks/useTitle';

const Home = () => {
    useTitle({pageTitle:"Home"})
    return (
       <div className="main">
            <Typography 
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: 55,
                    letterSpacing: '.5rem',
                    color: 'inherit',
                    textShadow: '2px 2px 3px rgba(0, 0, 0, 0.7)', 
                    textDecoration: 'none',
                }}
            >
                DELICIOUS
            </Typography>

            <Typography 
                variant="subtitle1"
                sx={{
                    fontFamily: '"Playfair Display", serif', 
                    fontSize: 26,
                    letterSpacing: '.25rem', 
                    color: 'inherit',
                    marginTop: '-2px', 
                    textAlign: 'center', 
                    maxWidth: '105%', 
                }}
            >
                Warm Flavors, Cozy Moments
            </Typography>
       </div>
    );
}

export default Home;
