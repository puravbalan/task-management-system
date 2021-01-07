import React from 'react';
import AddButton from '../ui-components/AddButton';
import styled from 'styled-components';

// Styled CSS
const FormContainer = styled.div`
  background-color: #ebecf0;
  padding: 0.5em 0.4em;
  border-radius: 3px;
`;
// Styled CSS
const FormInput = styled.input`
  padding: 8px 12px;
  resize: none;
  width: 100%;
  border: none;
`;

// Internal CSS
const styles = {
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '0.5em'
  },
  icon: {
    color: '#42526e',
    fontSize: '1.5em',
    cursor: 'pointer'
  }
};

// AddList Functional Component 
export default function ListForm({
  text,
  toggleForm,
  handleInputChange,
  buttonText,
  onSubmit
}) {
  return (
    //User Form Start
    <FormContainer>
      <FormInput
        autoFocus
        placeholder='Enter User Name'
        onBlur={toggleForm}
        value={text}
        onChange={handleInputChange}
      />
      <div style={styles.actionContainer}>
        <AddButton
          btnText={buttonText}
          disabled={text.length === 0}
          onClick={onSubmit}
        />

        <span onClick={toggleForm}>
          &nbsp;
          <i className='fas fa-times fa-lg' style={styles.icon}></i>
        </span>
      </div>
    </FormContainer>
     //User Form End
  );
}
