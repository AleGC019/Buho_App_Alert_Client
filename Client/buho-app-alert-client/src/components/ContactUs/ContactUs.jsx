import classes from './ContactUs.module.scss' 
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';

  

const ContactUs = () => { 
  
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (

    
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={classes['section']}>
      <h2> Contactanos </h2>
      </div>
        <div >
          <TextField
            id="outlined-multiline-flexible"
            label="Nombre"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />

          
          
          
        </div>
        <div>
        <TextField
            id="outlined-multiline-flexible"
            label="Correo electrónico"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
          
        </div>
        <div>
        <TextField
            id="outlined-multiline-static"
            label="Mensaje"
            multiline
            rows={4}
            defaultValue="Agrega tu mensaje..."
          />
          
        </div>

        <div className={classes['section']}>

        <figure className={classes['fluid']}>
        <img src='./src/assets/img/contactus.png' alt="alejandro" />
        </figure>

        </div>
      </Box>
    
    );
  }


export default ContactUs;