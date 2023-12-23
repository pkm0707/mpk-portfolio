import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
export function Projects(){
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    return(
        <div style={{textAlign:"center"}}>
            <h3>In Progress</h3>
            <CircularProgress variant="determinate" value={progress} />
        </div>
    )
}