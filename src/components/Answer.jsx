import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const useStyles = makeStyles({
    "button":{
            borderColor:'#ffb549',
            color:'#ffb549',
            fontWeight:600,
            marginBottom:'8px',
            "&:hover":{
                backgroundColor:'#ffb549',
                color:'#fff'
            }
        }
    })


const Answer = (props) =>{
    const classes = useStyles()
    return(
        <Button variant="outlined" className={classes.button} onClick={()=> props.select(props.content,props.nextId)}>
            {props.content}
        </Button>
    )
}


export default Answer