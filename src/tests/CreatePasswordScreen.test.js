import React from 'react'
import {screen, render, fireEvent, waitFor} from '@testing-library/react'
import { CreatePasswordScreen } from '../components/Form/CreatePasswordScreen'
import {rest} from 'msw'
import {setupServer} from 'msw/node'


/* mock server */
const server = setupServer(
    rest.post('/create-password', (req, res, ctx) => {
      const {password, confirmPassword, pista} = req.body
  
      if (password && confirmPassword && pista) {
        return res(ctx.status(CREATED_STATUS))
      }
  
      return res(ctx.status(ERROR_SERVER_STATUS))
    }),
  )


describe('cuando el createPasswordScreen esta renderizado', ()=>{
    
    beforeEach(() => render(<CreatePasswordScreen />))
 
    it('debe existir el componente CreatePasswordScreen', () =>{
 

        expect(
            screen.getByRole('heading', {name: /Crea tu Password Manager/i}),
        ).toBeInTheDocument()
        

    })

    it('deben haber inputs en el componente con los nombres password y confimrPassword', () =>{
 

        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/confirmPassword/i)).toBeInTheDocument();
        
        screen.debug()
    })

    it('validar que exista un boton de submit', () =>{
        
        expect(screen.getByRole('button', {name: /siguiente/i})).toBeInTheDocument();
       
    })

})

describe('Testeo del elemento submit cuando no se envian los campos requeridos', ()=>{
    
    beforeEach(() => render(<CreatePasswordScreen />))
    
    it('deberia mostrar mensajes de validación si no se estan mandando esos parámetros', ()=>{

        fireEvent.click(screen.getByDisplayValue('button', {name: /siguiente/i}))

        expect(screen.queryByText(/La contraseña es requerida/)).toBeInTheDocument()
        expect(screen.queryByText(/La confirmación de contraseña es requerida/)).toBeInTheDocument()

    }) 
})

describe('Cuando se hace submit', ()=>{
    
    beforeEach(() => render(<CreatePasswordScreen />))
    
    it('el boton de submit debería estar deshabilitado', async ()=>{

        expect (screen.getByDisplayValue('button', {name:/siguiente/i})).not.ToBeDisabled()

        fireEvent.click(screen.getByDisplayValue('button', {name:/siguiente/i}))

        expect (screen.getByDisplayValue('button', {name:/siguiente/i})).ToBeDisabled()

        await waitFor(() =>
            expect (screen.getByDisplayValue('button', {name:/siguiente/i})).not.ToBeDisabled() // espera a que vuelva a estar activo el boton de submit
        )
    }) 
})