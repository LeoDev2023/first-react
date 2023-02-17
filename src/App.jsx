import React, { useState, useRef } from 'react';
import { Button, Container, Box, TextField, IconButton, FilledInput, InputAdornment, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm({
    mode: 'onBlur'
  });
  const [password, setPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);

  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset()
  };


  return (
    <Container>
      <h1>Hola mundo</h1>
      <hr />
      <Box width={500} height={400} sx={{
        // backgroundColor:'red',
        margin: 'auto',
        marginTop: 10,
        px: 5,
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            variant='filled'
            label='Nombre'
            placeholder='Ingrese el nombre'
            name='name'
            autoComplete='off'
            sx={{ marginBottom: 3 }}
          />
          <TextField
            fullWidth
            variant='filled'
            label='correo'
            placeholder='example@example.com'
            name='email'
            autoComplete='off'
            sx={{ marginBottom: 3 }}
          />
          <FormControl sx={{ width: '100%' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={password ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setPassword(password ? false : true)}
                    edge="end"
                  >
                    {password ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder='Ingrese la contraseña'
              name='password'
              sx={{ marginBottom: 3 }}
              {...register('password', { required: true })}
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Repetir Contraseña</InputLabel>
            <FilledInput
              id="filled-adornment-repeatPassword"
              type={repeatPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setRepeatPassword(repeatPassword ? false : true)}
                    edge="end"
                  >
                    {repeatPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              error={errors.repeatPassword ? true : false}
              placeholder='Ingrese la contraseña'
              name='repeatPassword'
              sx={{ marginBottom: 1 }}
              {...register('repeatPassword', {
                required: true, validate: {
                  matchesPassword: (value) => {
                    const { password } = getValues()
                    return value === password
                  }
                }
              })}
            />
            <FormHelperText sx={{ color: 'red' }} id="filled-adornment-repeatPassword">{errors.repeatPassword && 'Las contraseñas no coinciden'}</FormHelperText>
          </FormControl>

          <Button fullWidth variant='contained' type='submit' sx={{ mt: 4 }}>Enviar</Button>
        </form>
      </Box>
    </Container>
  )
}

export default App 