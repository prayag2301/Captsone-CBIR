import  { MyDropzoneComponent } from './components/FileUpload'
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Typography align="center" variant="h2" color='primary' style={{
        padding: '50px'
      }}>
        Content Based image retreival
      </Typography>
      <MyDropzoneComponent />
    </div>
  );
}

export default App;
