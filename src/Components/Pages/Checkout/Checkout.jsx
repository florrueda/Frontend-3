import React from 'react';
import { Button, Grid, TextField, Typography } from "@mui/material";
import {ErrorMessage, useFormik} from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
    const {handleSubmit, handleChange, errors, values} = useFormik({
        initialValues: {
            name:'',
            email:'',
        },
        onSubmit: (data) => {
            console.log(data);
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Este campo es obligatorio").min(5, "El nombre es muy corto"),
            email: Yup.string().required("Este campo es obligatorio").email("Debe ser formato email")
        }),
        validateOnChange: false,
    })

    return (
        <div>
      <Typography color="primary" variant="h2" align="center">
        Finalizar compra
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su nombre"
              name="name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
              value={values.name}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
              value={values.email}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Comprar
        </Button>
      </form>
    </div>
    );
}

export default Checkout;
