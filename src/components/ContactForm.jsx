import styled from 'styled-components';
import avatar from '../assets/avatar.svg'
import { useEffect, useState } from 'react';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`

const ChatDiv = styled.div`
  display: flex;
`

const FormRigth = styled.div`
  background-color: #f2f1f2;
  display: flex;
  flex-direction: column;
  color: black;
  margin: 0 auto;
  width: 70%;
  padding: 10px;
  gap: 10px;
`

const ImageLeft = styled.img`
  border: 1px solid #d37cb3;
  border-radius: 35%;
  height: 80px;
`

const DivFooter = styled.div`
  display: flex;
  font-weight: 500;
  border-radius: 5px;
  flex-direction: column;
  align-items: end;
  padding-right: 10px;
  border-radius: 5px;
  `

const SpanEmail = styled.span`
  color: black;
  background-color: #d37cb3;
  width: 80%;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  padding: 10px;
  border-radius: 5px 5px 0 0;
`

const SpanTelefono = styled.span`
  color: black;
  background-color: #d37cb3;
  width: 80%;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  padding: 10px;
  border-radius: 0 0 5px 5px;
`

const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
  padding: 10px 0;

`
const InputEmail = styled.input.attrs({ type: "email" })`
  padding: 10px;
  border: 1px solid #e5e5e5;
  background-color: transparent;
  border-radius: 5px;
  color: black;
`
const InputTelefono = styled.input.attrs({ type: "number" })`
  padding: 10px;
  border: 1px solid #e5e5e5;
  background-color: transparent;
  border-radius: 5px;
  color: black;
`

const SpanError = styled.span`
  background-color: #d61010;
  color: white;
  padding: 5px;
  border-radius: 5px;
`

export default function ContactForm ({ contact, setContact, error, setError }) {
  const [errorContact, setErrorContact] = useState('')


  const handleOnChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    if (contact.Email === '') {
      setError(true)
      setErrorContact('El correo electrónico es requerido')
    } else if (contact.Telefono === '') {
      setError(true)
      setErrorContact('El teléfono es requerido')
    } else {
      setError(false)
      setErrorContact('')
    }
  }, [contact])

  return (
    <Main>
      <ChatDiv>
        <ImageLeft src={avatar} alt="avatar" width="75px" height="75px" />

        <FormRigth onChange={handleOnChange}>
          <Label>Datos de contacto</Label>
          {
            error && errorContact &&
            <SpanError>
              {errorContact}
            </SpanError>
          }
          <InputEmail placeholder='Correo electrónico' name='Email' defaultValue={contact?.Email} />
          <InputTelefono placeholder='Teléfono celular' name='Telefono' defaultValue={contact?.Telefono} />
        </FormRigth>

      </ChatDiv>

      <DivFooter>
        <SpanEmail>Correo electrónico: {contact.Email}</SpanEmail>
        <SpanTelefono>Teléfono celular: {contact.Telefono}</SpanTelefono>
      </DivFooter>
    </Main>
  )
}
