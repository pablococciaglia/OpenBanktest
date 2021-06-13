import React from 'react'
import {screen, render} from '@testing-library/react'
import { HomeScreen } from '../components/ProductInformation/HomeScreen'
describe('cuando el createPasswordScreen esta renderizado', ()=>{
    
    beforeEach(() => render(<HomeScreen />))
 
    it('debe existir el componente HomeScreen', () =>{
 
        expect(
            screen.getByText(/Crea tu Password Manager/i),
        ).toBeInTheDocument()
  
    })

    it('deben haber un boton con valor de siguiente', () =>{
 
        expect (screen.getByDisplayValue('button', {name: /siguiente/i})).toBeInTheDocument();
        
        screen.debug()
    })
})
