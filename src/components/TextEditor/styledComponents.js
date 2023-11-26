import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f5d0fe;
  font-family: 'Roboto';
`

export const TextEditorContainerForm = styled.form`
  background-color: #ffffff;
  width: 450px;
  height: 250px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`
export const TextEditorContainerTitle = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  padding-top: 30px;
`

export const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding: 15px;
  gap: 10px;
`
export const TextInputElement = styled.input`
  border: 1px solid #cbd2d9;
  border-radius: 5px;
  width: 250px;
  height: 35px;
  outline: none;
  cursor: pointer;
`
export const ButtonElement = styled.button`
  width: 50px;
  height: 35px;
  color: #ffffff;
  border: none;
  background-color: #d946ef;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`
export const InputText = styled.p`
  color: #323f4b;
  padding: 0px;
  margin: 0px;
`
