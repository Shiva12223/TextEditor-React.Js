import {Component} from 'react'

import {
  BgContainer,
  TextEditorContainerForm,
  TextInputContainer,
  TextEditorContainerTitle,
  TextInputElement,
  ButtonElement,
  InputText,
} from './styledComponents'

class TextEditor extends Component {
  state = {textInput: '', isToggleTheme: false}

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
  }

  editBtText = () => {
    this.setState(prevState => ({
      isToggleTheme: !prevState.isToggleTheme,
    }))
  }

  render() {
    const {textInput, isToggleTheme} = this.state
    const buttonText = isToggleTheme ? 'Edit' : 'Save'
    return (
      <BgContainer>
        <TextEditorContainerForm onSubmit={this.submitForm}>
          <TextEditorContainerTitle>
            Editable Text Input
          </TextEditorContainerTitle>
          <TextInputContainer>
            {isToggleTheme ? (
              <InputText>{textInput}</InputText>
            ) : (
              <TextInputElement
                type="text"
                onChange={this.onChangeTextInput}
                value={textInput}
              />
            )}
            <ButtonElement type="button" onClick={this.editBtText}>
              {buttonText}
            </ButtonElement>
          </TextInputContainer>
        </TextEditorContainerForm>
      </BgContainer>
    )
  }
}

export default TextEditor
