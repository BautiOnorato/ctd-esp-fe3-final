import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { ContextProvider } from '../Components/utils/global.context'
import App from '../App'
import Contact from '../Routes/Contact'
import { Formik } from 'formik'

// Los test del Form andan correctamente pero la consola devuelve un conflicto con Formik. 
// Igualmente no influye en si el test pasa o no. 

test('Btn DarkMode', () => {

    render(
        <ContextProvider>
            <App/>
        </ContextProvider>
    );

    const btnDarkmode = screen.getByRole('button', {
        name: /🌙/i
    });
    
    expect(btnDarkmode).toBeInTheDocument();

    fireEvent.click(btnDarkmode);

    const btnLightMode = screen.getByRole('button', {
        name: /☀/i
    });

    expect(btnLightMode).toBeInTheDocument();

})

test('btn volver arriba', () => {
    render(
        <ContextProvider>
            <App/>
        </ContextProvider>
    );

    const btnVolverArriba = screen.getByRole('button', {
        name: /Volver Arriba/i
    })
    
    fireEvent.click(btnVolverArriba);

    expect(window.scrollY).toBe(0);
})

describe('Signup', () => {

    beforeEach(() => {
        render(
            <ContextProvider>
                <Contact/>
            </ContextProvider>
        )
    })
    
    it('Submit correcto Form', async () => {
    
        const inputName = screen.getByPlaceholderText(/nombre completo/i);
        const inputEmail = screen.getByPlaceholderText(/email/i);
        const btnSend = screen.getByRole('button', {
            name: /send/i
        })
    
        fireEvent.change(inputName, {
            target: { value: "Bautista" }
        })    
    
        fireEvent.change(inputEmail, {
            target: { value: "bauti@gmail.com" }
        })  
        
        fireEvent.click(btnSend);
    
        const mensaje = await screen.findByText(/Gracias Bautista, te contactaremos cuanto antes vía mail/i);
    
        expect(mensaje).toBeInTheDocument();
    
    })
    
    it('Submit name > 6', async () => {

        const inputName = screen.getByPlaceholderText(/nombre completo/i);
        const inputEmail = screen.getByPlaceholderText(/email/i);
        const btnSend = screen.getByRole('button', {
            name: /send/i
        })
    
        fireEvent.change(inputName, {
            target: { value: "Bauti" }
        })    
    
        fireEvent.change(inputEmail, {
            target: { value: "bauti@gmail.com" }
        })  
        
        fireEvent.click(btnSend);
    
        const mensaje = await screen.findByText(/Por favor verifique su información nuevamente/i);
    
        expect(mensaje).toBeInTheDocument();
    
    })
    
    it('Submit formato email incorrecto', async () => {

        const inputName = screen.getByPlaceholderText(/nombre completo/i);
        const inputEmail = screen.getByPlaceholderText(/email/i);
        const btnSend = screen.getByRole('button', {
            name: /send/i
        })
    
        fireEvent.change(inputName, {
            target: { value: "Bautista" }
        })    
    
        fireEvent.change(inputEmail, {
            target: { value: "bautigmail.com" }
        })  
        
        fireEvent.click(btnSend);
    
        const mensaje = await screen.findByText(/Por favor verifique su información nuevamente/i);
    
        expect(mensaje).toBeInTheDocument();
    
    })

})

