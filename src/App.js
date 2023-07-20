import './App.css';
import Skills from './Skills';
import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import img from './Assets/img.jpg';
import classes from './Home.module.css'
import base_img from './Assets/profile_pic.png'
import doc from "./Assets/resume.pdf"
import ProjectComp from './ProjectComp';
import AllProject from './AllProject';
import certificate from './certificates';
import gitgub from "./Assets/github.svg"
import linkedin from "./Assets/linkedin.svg"
import discord from "./Assets/discord.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import insta from "./Assets/insta.svg"
import classess from "./LightDarkButton.module.css";


function App() {

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : "light"))
    // setColor(theme.theme==="dark" ? "#151515" : "#fff");
  }

  const [them, setthem] = useState(true);

  const changeTheme = () => {
    setthem(!them)
    console.log(theme.theme)
    toggleTheme();
  }

  const form = useRef();
  const [navbar, setnavbar] = useState(false);
  const [tt,settt] = useState(false);
  const [achieve, setachieve] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [connect, setConnect] = useState(false);
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    message: ""
  });

  let i = 0;

  const onClickDrop = () => {
    setDropdown(!dropdown)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ghwni1l', 'template_tr2u8mv', form.current, 'Y7r3LmqvV8zGiiJ8J')
      .then((result) => {
          alert("Email sent to Shweta Mandal Successfully!!");
          setuserdata({ name: "", email: "", message: "" })
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const HandleConnect = () => {
    setConnect(!connect)
  }

  const HandleClick = () => {
    setachieve(!achieve);
  }

  const changeNavBack = () => {
    if(window.screenX <1030){
      
    }
    if (window.scrollY >= 100) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  }

  window.addEventListener("scroll", changeNavBack);
  return (
    <div className={classes.max_body}>
      {/* bubble animation */}
      <div className={`${classes.body} ${theme === "light" ? classes.light : classes.dark}`}>

        <div className="App">
          <div id="background-wrap">
            <div class="bubble x1"></div>
            <div class="bubble x2"></div>
            <div class="bubble x3"></div>
            <div class="bubble x4"></div>
            <div class="bubble x5"></div>
            <div class="bubble x6"></div>
            <div class="bubble x7"></div>
            <div class="bubble x8"></div>
            <div class="bubble x9"></div>
            <div class="bubble x10"></div>
          </div>
        </div>

        {/* navbar */}
        <div className={`${classes.Navbar} ${navbar === true ? classes.active : classes.dark} `}>
          <a href="#home" className={classes.head_h1}>Shweta Mandal</a>
          <div className={classes.opt}>
            <a href="#aboutMe" className={classes.opt_p}>ABOUT</a>
            <a href="#Projects" className={classes.opt_p}>PROJECTS</a>
            <a href="#Skills" className={classes.opt_p}>MORE</a>
            <a href="#ContactMe" className={classes.opt_p}>CONTACT</a>
            <div className={`${classess.out_toggle} ${them === true ? classess.on : classess.off}`} onClick={changeTheme}>
        <div className={classess.btn}/>
      </div>
          </div>
          <button className={classes.set_my_drop} onClick={onClickDrop}>
            <span class="material-symbols-outlined make_new">menu_open</span>
            </button>
          
        </div>
        <div className={`${classes.small_nav} ${dropdown === true ? classes.on : classes.off} ${theme === "light" ? classes.light : classes.dark}`}>
          <a href="#aboutMe" className={classes.opt_p}>ABOUT</a>
            <a href="#Projects" className={classes.opt_p}>PROJECTS</a>
            <a href="#Skills" className={classes.opt_p}>MORE</a>
            <a href="#ContactMe" className={classes.opt_p}>CONTACT</a>
            <div className={`${classess.out_toggle} ${them === true ? classess.on : classess.off}`} onClick={changeTheme}>
        <div className={classess.btn}/>
      </div>
          </div>

        {/* top contect; left part */}
        <div className={classes.top_body} id="home">
          <div className={classes.left_part} data-aos="zoom-out-left">
            <h1 className={classes.main}>Hi,<br></br> I'm <span className={classes.name}>Shweta</span></h1>
            <p className={classes.time}>Web & Android Developer</p>
            <a href='#ContactMe' className={classes.hire}>Hire Me <span class="material-symbols-outlined">
              arrow_forward
            </span></a>
          </div>

          {/* top; main image */}
          <img className={classes.main_img} alt='' src={base_img} />

          {/* top content; right part */}
          <div className={classes.right_part} data-aos="zoom-out-right">
            <p className={classes.t}>Expert on</p>
            <p className={classes.p}>Based in India <br /> i'm developer and <br />UI/UX designer.
            </p>
            <p className={classes.q}>Are you looking for new and skilled hands to work on new projects? Do you want to start something new? <br /> Shake Hands with me!!</p>

            {/* download CV */}
            <a href={doc} className={classes.download} download="resume.pdf">Dowload CV<span class="material-symbols-outlined as">
              download
            </span></a>
          </div>
        </div>
      </div>

      {/* part2 : About Me section */}
      <div id="aboutMe" className={`${classes.got_to_part} ${theme === "light" ? classes.light : classes.dark}`}></div>
      <div className={`${classes.part2} ${theme === "light" ? classes.light : classes.dark}`}>
        <img src={img} alt='' className={classes.about_img} data-aos="flip-left"/>

        <div className={classes.about_ifo}>
          <h3 className={classes.about_h}>About Me</h3>
          <div className={classes.br}></div>
          <p className={classes.about_me} data-aos="fade-right">
            My name is Shweta Mandal. I'm an B. E. student at D. Y. Patil College Of Enineering, Akurdi in the Computer Science Department.<br /><br /> I was born in West Bengal and have travelled to different parts of India while studying in Delhi, Bangalore and Pune due to my father's transferable job.
            <br /><br />
            I am currently in the third year of my College and have been part of various clubs - GDSC, ACES etc. I like to explore new technologies and domains and have experimented with few of them. I might not know everything but I am a fast learner and can adapt to anything new.
            <br /><br />
            I like to read and am also very athletic. I have been a national player in rowing and was also engaged in other sports. I believe being engaged in sports keeps my mind cool and clears up my head so that I can understand and learn the tuffest of concepts with ease.
          </p>
        </div>
      </div>

      {/* part 3 : Projects section */}
      <div id='Projects' className={`${classes.got_to_part} ${theme === "light" ? classes.light : classes.dark}`}></div>
      <div className={`${classes.part3} ${theme === "light" ? classes.light : classes.dark}`}>
        <h3 className={classes.about_h}>Projects</h3>
        <div className={classes.br}></div>
        <div className={classes.all_project}>
          {
            AllProject.map((e) => {
              return <ProjectComp prop={e}/>
            })
          }
        </div>
      </div>

      {/* part4 : Skills section */}
      <div id="Skills" className={`${classes.got_to_part} ${theme === "light" ? classes.light : classes.dark}`}></div>
      <div className={`${classes.part4} ${theme === "light" ? classes.light : classes.dark}`} >
        <h3 className={classes.about_h}>My Skills</h3>
        <div className={classes.br}></div>
        <button className={`${classes.achieve_btn} ${achieve === true ? classes.yes : classes.no} `} onClick={HandleClick}>ACHIEVEMENTS</button>
        <div className={classes.all_skills}>
          {
            Skills.map((e) => {
              console.log(e)
              return <div className={classes.single_skill} data-aos="flip-right">
                <div className={classes.upper_skill}></div>
                <img src={e.imgLink} alt='' className={classes.skillimg} />
                <h2 className={classes.skill_name}>{e.name}</h2>
              </div>
            })
          }
        </div>
         {/* right opening : Acheivements section */}
      <div className={`${classes.part4_left} ${achieve === true ? classes.yes : classes.no} ${theme === "light" ? classes.light : classes.dark}`}>
        {
          certificate.map((e) => {
            i += 1;
            return <img src={e} alt="" style={{ marginTop: `${i * 10}px` }} className={classes.certi_img} />
          })
        }
      </div>
      </div>

      {/* part 5 : Contact Me Section */}
      <div id="ContactMe" className={`${classes.got_to_part} ${theme === "light" ? classes.light : classes.dark}`}></div>
      <div className={`${classes.part5} ${theme === "light" ? classes.light : classes.dark}`}>
        <h3 className={classes.about_h}>Contact Me</h3>
        <div className={classes.br}></div>

        <button className={`${classes.connect_btn} ${connect === true ? classes.yes : classes.no} `} onClick={HandleConnect}>LET'S CONNECT</button>

        <form name="myContact" className={classes.contactform} ref={form} onSubmit={sendEmail} data-aos="flip-left">
          <label className={classes.label}>Name</label>
          <input type='text' className={classes.input} required value={userdata
            .name} onChange={(e) => setuserdata({ ...userdata, name: e.target.value })} name="from_name"></input>
          <label className={classes.label}>Email Address</label>
          <input type='email' className={classes.input} required value={userdata
            .email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} name="from_email"></input>
          <label className={classes.label}>Message</label>
          <textarea className={classes.doit} required value={userdata
            .message} onChange={(e) => setuserdata({ ...userdata, message: e.target.value })} name="message"></textarea>
          <input type='submit' className={classes.submit} />
        </form>
      </div>

      {/* left opening : my connections */}
      <div className={`${classes.part4_right} ${connect === true ? classes.yes : classes.no} ${theme === "light" ? classes.light : classes.dark}`}>     
      <a href="https://www.instagram.com/glowing_blossom_shweta/" target="_blank" rel='noreferrer'><img src={insta} alt="" className={classes.icon} /></a>
          <a href="https://github.com/Shweta2003" target="_blank" rel='noreferrer'><img src={gitgub} alt='' className={classes.icon} /></a>
          <a href="https://www.linkedin.com/in/shweta-mandal-a287a8253/" target="_blank" rel='noreferrer'><img src={linkedin} alt='' className={classes.icon} /></a>
          <a href="https://discord.com/channels/1106127858553851924/1106127858553851928" target="_blank" rel='noreferrer'><img src={discord} alt='' className={classes.icon} /></a>
      </div>

      {/* Last Part : Footer section */}
      <div className={classes.footer}>
        <p className={classes.endNode}>Copyright 2023</p>
        <a href="#home" className={classes.endname} >Shweta Mandal</a>
        <div className={classes.fill_line}></div>
        <div className={classes.cred}>
          <a href="https://www.instagram.com/glowing_blossom_shweta/" target="_blank" rel='noreferrer'><img src={insta} alt="" className={classes.icon} /></a>
          <a href="https://github.com/Shweta2003" target="_blank" rel='noreferrer'><img src={gitgub} alt='' className={classes.icon} /></a>
          <a href="https://www.linkedin.com/in/shweta-mandal-a287a8253/" target="_blank" rel='noreferrer'><img src={linkedin} alt='' className={classes.icon} /></a>
          <a href="https://discord.com/channels/1106127858553851924/1106127858553851928" target="_blank" rel='noreferrer'><img src={discord} alt='' className={classes.icon} /></a>
        </div>
      </div>

      </div>
  );
}

export default App;
