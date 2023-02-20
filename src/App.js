
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import { Typography } from '@mui/material';
import FileUpload from './components/FileUpload'
import Formm from './components/Display';
import ActionAreaCard from './components/Info';


function App() {
  return (
    <div className='App' style={{
      backgroundColor: '#15202b',

    }}>
      <div className="img">
        <ButtonAppBar />
        <Typography align="center" variant="h2" color='primary' style={{
          padding: '50px'
        }}>
          Content Based Medical Image Retreival
        </Typography>
        <div className='disp'>
          <ActionAreaCard />
        </div>
        <div className='FileUpload'>
          <FileUpload />
        </div>

        <Formm />

      </div>
    </div>
  );
}

export default App;
