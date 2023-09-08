import { useEffect, useState } from 'react'
import styled from 'styled-components';
import avatar from '../assets/avatar.svg'

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
  height: 50px;
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

const Label = styled.label`
font-size: 20px;
font-weight: 500;
padding: 10px 0;
`
const InputMes = styled.input.attrs({ type: "text" })`
padding: 10px;
border: 1px solid #e5e5e5;
background-color: transparent;
border-radius: 5px;
color: black;
`;

const Input = styled.input.attrs({ type: "number" })`
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



export default function DateofBirth ({ date, setDate, error, setError }) {
  const [errorDate, setErrorDate] = useState(2)

  const handleOnChange = (e) => {
    const capitalize = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setDate((prevState) => ({
      ...prevState,
      [e.target.name]: capitalize
    }))
  }

  useEffect(() => {
    if (Number(date.Dia) < 1 || Number(date.Dia) > 31) {
      setError(true)
      setErrorDate("El día debe estar entre 1 y 31")
    } else if (date.Mes === '') {
      setError(true)
      setErrorDate("El mes es requerido")
    } else if (date.Año === '') {
      setError(true)
      setErrorDate("El año es requerido")
    } else {
      setError(false)
      setErrorDate('')
    }
  }, [date])


  return (
    <Main>
      <ChatDiv>
        <ImageLeft src={avatar} alt="avatar" width="75px" height="75px" />

        <FormRigth onChange={handleOnChange}>
          <Label>¿Cuál es tu fecha de nacimiento?</Label>
          {
            error && errorDate &&
            <SpanError >
              {errorDate}
            </SpanError>
          }
          <Input placeholder='Día' name='Dia' defaultValue={date?.Dia} />
          <InputMes placeholder='Mes' name='Mes' defaultValue={date?.Mes} />
          <Input placeholder='Año' name='Año' defaultValue={date?.Año} />
        </FormRigth>

      </ChatDiv>

      <DivFooter>
        <SpanResults>
          {`Fecha de nacimiento: ${date.Dia} ${date.Mes} ${date.Año} `}
        </SpanResults>
      </DivFooter>

    </Main>
  )
}
