import React, {useEffect} from 'react'
import classes from './Home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ProjectComp = (props) => {

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);

  return (
    <a className={classes.main_pro} href={`${props.prop.ProjectLink}`} target="_blank" rel='noreferrer' data-aos="flip-up">
      <div className={classes.appear_on_top}></div>
        <img src={props.prop.ProjectImg} alt='' className={classes.do} />
        <div className={classes.pr_base}>
        <h3 className={classes.name_of_pr}>{props.prop.ProjectName}</h3>
        <p className={classes.used}>{props.prop.ProjectTech}</p>
        <p className={classes.all_pr_info}>{props.prop.Projectetc}</p>
        </div>
    </a>
  )
}

export default ProjectComp