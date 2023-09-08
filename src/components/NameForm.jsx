import styled from 'styled-components';
import avatar from '../assets/avatar.svg'
import { useEffect, useState } from 'react';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
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
  padding-left: 10px;
  display: flex;
  align-items: center;
  font-weight: 500;
  border-radius: 5px;
  justify-content: end;
  margin-right: 10px;
`

const SpanResults = styled.span`
  background-color: #d37cb3;
  color: black;
  font-weight: 500;
  font-size: 14px;
  width: 80%;
  padding: 5px;
  display: flex;
  border-radius: 5px;
  padding: 10px 15px;
`

const SpanError = styled.span`
  background-color: #d61010;
  color: white;
  padding: 5px;
  border-radius: 5px;
`

const Label = styled.label`
font-size: 20px;
font-weight: 500;
padding: 10px 0;

`
const Input = styled.input.attrs({ type: "text" })`
padding: 10px;
border: 1px solid #e5e5e5;
background-color: transparent;
border-radius: 5px;
color: black;
`;

export default function NameForm ({ name, setName, error, setError }) {
  const [errorName, setErrorName] = useState('')



  const handleOnChange = (e) => {
    const capitalize = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setName((prevState) => ({
      ...prevState,
      [e.target.name]: capitalize
    }))

  }


  useEffect(() => {
    if (name.Nombre === '') {
      setError(true)
      setErrorName('El nombre es requerido')
    } else {
      setError(false)
      setErrorName('')
    }
  }, [name])

  return (
    <Main>
      <ChatDiv>
        <ImageLeft src={avatar} alt="avatar" width="75px" height="75px" />
        <FormRigth onChange={handleOnChange}>
          <Label>¿Cuál es tu nombre?</Label>
          {
            error && errorName &&
            <SpanError >
              {errorName}
            </SpanError>
          }
          <Input placeholder='Nombre' name='Nombre' defaultValue={name?.Nombre} autoFocus />
          <Input placeholder='Segundo nombre' name='SegundoNombre' defaultValue={name?.SegundoNombre} />
          <Input placeholder='Apellido Materno' name='ApellidoMaterno' defaultValue={name?.ApellidoMaterno} />
          <Input placeholder='Apellido Paterno' name='ApellidoPaterno' defaultValue={name?.ApellidoPaterno} />

        </FormRigth>

      </ChatDiv>

      <DivFooter>

        <SpanResults>
          {`Nombre completo: ${name.Nombre} ${name.SegundoNombre} ${name.ApellidoMaterno} ${name.ApellidoPaterno}`}
        </SpanResults>
      </DivFooter>
    </Main>
  )
}
