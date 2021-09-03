import { useState } from "react"
import { Button } from "./components/button"
import styled from "styled-components"
import { TabBodyContainer } from "./components/tab-body-container"
import { FormModal } from "./FormModal"

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`

const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`

const ButtonContainer = styled.div`
  margin-top: 24px;
`

const FormButton = styled(Button)`
  width: 120px;
`

export const Form = ({ onAddLang }) => {
  const [text, setText] = useState('')
  const [showModal, setShowModal] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setShowModal(true);
  }
  return (
    <TabBodyContainer title='学部の新設'>
      <form onSubmit={submitForm}>
        <div>
          <Label>学部名</Label>
          <Input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <ButtonContainer>
          <FormButton>申請</FormButton>
        </ButtonContainer>
      </form>
      {
        showModal && <FormModal confirm={() => onAddLang(text)} cancel={() => setShowModal(false)} />
      }
    </TabBodyContainer>
  )
}
