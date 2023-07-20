import React from 'react'
import classes from './Home.module.css';
import { useNavigate} from 'react-router-dom';
import img from './Assets/pr1.png'

const ProjectComp = (props) => {
  return (
    <a className={classes.main_pro} href={`${props.prop.ProjectLink}`} target="_blank" rel='noreferrer'>
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