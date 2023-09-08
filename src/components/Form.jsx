import { styled } from 'styled-components';
import NameForm from "./NameForm";
import DateofBirthForm from './DateofBirthForm';
import ContactForm from './ContactForm';
import { useEffect, useState } from 'react';


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

const SvgRigth = styled.div`
 width: 50px;
 height: 100%;
 fill: white;
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
        <SvgRigth>
          <svg viewBox="0 0 1024 1024" fill="#FFFFFF" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M824.8 1003.2H203.2c-12.8 0-25.6-2.4-37.6-7.2-11.2-4.8-21.6-12-30.4-20.8-8.8-8.8-16-19.2-20.8-30.4-4.8-12-7.2-24-7.2-37.6V260c0-12.8 2.4-25.6 7.2-37.6 4.8-11.2 12-21.6 20.8-30.4 8.8-8.8 19.2-16 30.4-20.8 12-4.8 24-7.2 37.6-7.2h94.4v48H203.2c-26.4 0-48 21.6-48 48v647.2c0 26.4 21.6 48 48 48h621.6c26.4 0 48-21.6 48-48V260c0-26.4-21.6-48-48-48H730.4v-48H824c12.8 0 25.6 2.4 37.6 7.2 11.2 4.8 21.6 12 30.4 20.8 8.8 8.8 16 19.2 20.8 30.4 4.8 12 7.2 24 7.2 37.6v647.2c0 12.8-2.4 25.6-7.2 37.6-4.8 11.2-12 21.6-20.8 30.4-8.8 8.8-19.2 16-30.4 20.8-11.2 4.8-24 7.2-36.8 7.2z" fill=""></path><path d="M752.8 308H274.4V152.8c0-32.8 26.4-60 60-60h61.6c22.4-44 67.2-72.8 117.6-72.8 50.4 0 95.2 28.8 117.6 72.8h61.6c32.8 0 60 26.4 60 60v155.2m-430.4-48h382.4V152.8c0-6.4-5.6-12-12-12H598.4l-5.6-16c-12-33.6-43.2-56-79.2-56s-67.2 22.4-79.2 56l-5.6 16H334.4c-6.4 0-12 5.6-12 12v107.2zM432.8 792c-6.4 0-12-2.4-16.8-7.2L252.8 621.6c-4.8-4.8-7.2-10.4-7.2-16.8s2.4-12 7.2-16.8c4.8-4.8 10.4-7.2 16.8-7.2s12 2.4 16.8 7.2L418.4 720c4 4 8.8 5.6 13.6 5.6s10.4-1.6 13.6-5.6l295.2-295.2c4.8-4.8 10.4-7.2 16.8-7.2s12 2.4 16.8 7.2c9.6 9.6 9.6 24 0 33.6L449.6 784.8c-4.8 4-11.2 7.2-16.8 7.2z" fill=""></path></g></svg>
        </SvgRigth>

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
