import { styled } from 'styled-components';
import NameForm from "./NameForm";
import DateofBirthForm from './DateofBirthForm';
import ContactForm from './ContactForm';
import { useEffect, useState } from 'react';
import IconForm from '../assets/formIcon.svg'

const Header = styled.header`
display: flex;
background-color: #d37cb3;
padding: 10px;
justify-content: space-around;
align-items: center;
color: black;
height: 120px;
padding-bottom: 30px;
padding-top: 30px;

`
const TitleHeader = styled.h1`
 font-size: 20px;
`

const ImgRigth = styled.img`
 width: 50px;
 height: 100%;
 display: flex;
`

const DivLeft = styled.div`
display: flex;
 flex-direction: column;
 justify-content: space-between;
 height: 100%;
`

const DivFooter = styled.div`
display: flex;
gap: 5px;
`

const Button = styled.button`
background-color: #ee4282;
 color: white;
 border: none;
 padding: 10px 35%;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 5px;
 margin: 0 auto;
 font-size: smaller;
 margin-top: 20px;
`

const DivSpan = styled.div`
display: flex;
justify-content: end;
`

const Span = styled.span`
background-color: #f2f1f2;
width: 70%;
padding: 10px;
`

const SectionResults = styled.section`
  background-color: #d37cb3;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  padding: 25px 25px;
  border-radius: 5px;
  margin-top: 20px;
`
const SpanResults = styled.span`
  color: black;
  font-size: 15px;

`


export default function Form () {
  const [infoSession, setInfoSession] = useState(false)
  const [error, setError] = useState(false);


  const [name, setName] = useState({
    Nombre: '',
    SegundoNombre: '',
    ApellidoMaterno: '',
    ApellidoPaterno: ''
  })

  const [date, setDate] = useState({
    Dia: '',
    Mes: '',
    Año: '',
  })

  const [contact, setContact] = useState({
    Email: '',
    Telefono: '',
  })

  useEffect(() => {
    setError(false)
  }, [])

  useEffect(() => {
    const info = sessionStorage.getItem('info');
    if (info) {
      setInfoSession(true)
      const parsedInfo = JSON.parse(info);
      setName(parsedInfo.name || {})
      setDate(parsedInfo.date || {})
      setContact(parsedInfo.contact || {})
    }
  }, [])

  const onClick = () => {
    if (error) return
    if (name.Nombre === '' || date.Dia === '' || date.Mes === '' || date.Año === '' || contact.Email === '' || contact.Telefono === '') {
      setError(true)
      return
    }

    sessionStorage.setItem('info', JSON.stringify({ name, date, contact }))
    setInfoSession(true)
  }

  return (
    <>

      <Header>
        <DivLeft>
          <TitleHeader>Título del formulario</TitleHeader>
          <DivFooter>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M12 10l0 3l2 0"></path>
              <path d="M7 4l-2.75 2"></path>
              <path d="M17 4l2.75 2"></path>
            </svg>
            <span>En menos de 5 minutos.</span>
          </DivFooter>
        </DivLeft>
        <ImgRigth src={IconForm} alt="icono" />

      </Header>
      <NameForm name={name} setName={setName} error={error} setError={setError} />
      <DateofBirthForm date={date} setDate={setDate} error={error} setError={setError} />
      <ContactForm contact={contact} setContact={setContact} error={error} setError={setError} />
      <DivSpan>

        <Span>Si tus datos son correctos por favor continuemos</Span>
      </DivSpan>
      <Button onClick={onClick}>Iniciar</Button>
      {infoSession && (
        <SectionResults>
          <SpanResults>Fecha de nacimiento: {date.Dia} {date.Mes} {date.Año}</SpanResults>
          <SpanResults>Correo electrónico: {contact.Email}</SpanResults>
          <SpanResults>Teléfono celular: {contact.Telefono}</SpanResults>
          <SpanResults>Nombre: {name.Nombre} {name.SegundoNombre} {name.ApellidoPaterno} {name.ApellidoMaterno}</SpanResults>
        </SectionResults>
      )}

    </>
  )
}
