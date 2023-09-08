import './App.css'
import styled from 'styled-components';
import Form from './components/Form';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #BF4F74;
`

const ChatDisplay = styled.div`
max-width: 400px;
margin: 0 auto;
`

function App () {


  return (
    <ChatDisplay>
      <Title>Rocket-code</Title>
      <Form />
    </ChatDisplay>
  )
}

export default App
