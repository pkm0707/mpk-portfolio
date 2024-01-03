import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export function Profile(){
    const[view,setView]=useState(true)
    const navigate = useNavigate()
    let styles ={
        display : view ? "none" : "block",
        fontSize:"20px",
        padding:"10px",
        color:"goldenrod",
        margin:"0px",
        textAlign:"center"
    };
    return(
        <div style={{display:"flex",flexWrap:"wrap",flexDirection:"column",justifyContent:"center",alignItems:"center",justifyItems:"center",marginTop:50}}>
            <Card sx={{ maxWidth: 345,backgroundColor:"gray"}}>
                <CardMedia
                    sx={{ height: 250}}
                    image="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                />
                <CardContent>
                    <Typography variant="body2">Hi, I'm Praveen Kumar M, a recent graduate specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Eager to apply my skills in web development and contribute to innovative projects. Ready to embark on a journey of continuous learning and growth</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='contained' onClick={()=>navigate("/about")}>Know More</Button>
                </CardActions>
            </Card>
            <div className='button-p'>
                <Button variant='contained' onClick={()=>setView(!view)}><Tooltip title='Quote that I like so much'>Quote</Tooltip></Button>
                <p style={styles}><q><b>Self-belief and hard work will always earn you success - by Virat Kohli</b></q></p>
            </div>
        </div>
    )
}