import React from 'react'
import TextField from '@material-ui/core/TextField'

const textInput = (props)=> {
    return (
        <TextField 
            fullWidth={true}
            label={props.label}
            margin={"dense"}
            multiline={props.multiline}
            rows={props.rows}
            value={props.type}
            type={props.type}
            onChange={props.onChange}
        />
    );
  }

export default textInput