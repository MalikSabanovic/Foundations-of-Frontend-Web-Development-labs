import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import News from './Pages/News.jsx';
import Polo from './Pages/Polo.jsx';
import Golf from './Pages/Golf.jsx';
import Tiguan from './Pages/Tiguan.jsx';
import Troc from './Pages/Troc.jsx';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      light: '#81d4fa', 
      main: '#29b6f6',  
      dark: '#ffffff',  
      contrastText: '#fff',
    },
    secondary: {
      light: '#b3e5fc', 
      main: '#81d4fa',  
      dark: '#4ba3c7',  
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}> 
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<News />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/polo" element={<Polo />} />
              <Route path="/golf" element={<Golf />} />
              <Route path="/tiguan" element={<Tiguan />} />
              <Route path="/troc" element={<Troc />} />
            </Routes>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
