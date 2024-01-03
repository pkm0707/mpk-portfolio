import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaHtml5} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
export function About() { 
  return (
    <div className="about-page">
      <div>
        Hello there! 👋 I'm Praveen Kumar M, a passionate and ambitious MERN
        stack developer on a mission to bring innovative and efficient web
        solutions to life.I am excited to embark on a journey where technology
        meets creativity.
      </div>
      <br />
      <div>
        <strong>🚀 What I Bring to the Table : </strong>
      </div>
      <br />
      <Accordion sx={{ backgroundColor: "lightgreen", color: "black" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>MERN Expertise</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Proficient in MongoDB, Express.js, React.js, and Node.js, I
            specialize in building robust and scalable web applications that
            deliver seamless user experiences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "lightslategray", color: "black" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Problem Solver</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I thrive on tackling challenges and finding elegant solutions. My
            analytical mindset and attention to detail ensure that I can
            navigate complex coding scenarios with ease.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "lightsteelblue", color: "black" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Continuous Learner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In the dynamic world of web development, I believe in the importance
            of staying updated with the latest technologies. I am committed to
            lifelong learning and adapting to emerging trends.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "lightpink", color: "black" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Collaborative Team Player</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I understand the significance of teamwork in achieving success. My
            effective communication skills and collaborative spirit make me a
            valuable asset in any development team.
          </Typography>
        </AccordionDetails>
      </Accordion><br/>
      <div>
        <div><strong>🛠️ Technologies in My Toolbox : </strong></div><br/>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",border:"5px solid green",outline:"3px solid red",outlineOffset:"4px",padding:"10px"}}>
          <FaHtml5 size={50} color="orangered"/>
          <FaCss3Alt size={50} color="blue"/>
          <IoLogoJavascript size={50} color="yellow"/>
          <FaBootstrap size={50} color="#563d7c"/>
          <DiMongodb size={50} color="green"/>
          <FaReact size={50} color="blue"/>
          <FaNode size={50} style={{marginLeft:10}}/>
        </div>
      </div>
    </div>
  );
}
