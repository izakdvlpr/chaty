import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .form {
    background: #434758;
    padding: 1rem;
  }

  .form__field {
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    color: #333;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    width: 100%;
  }

  .form__field:focus {
    border-color: #a3f7ff;
    box-shadow: 0 0 7px #a3f7ff;
    outline: none;
  }

  .list {
    margin: 0;
    padding: 1rem;
  }

  .list__item {
    list-style: none;
  }

  .list__item.list__item--mine {
    text-align: right;
  }

  .message {
    border: 1px solid transparent;
    border-radius: 5px;
    display: inline-block;
    list-style: none;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }

  .message.message--mine {
    background: #c3e88d;
    border-color: #82be27;
    text-align: right;
  }

  .message.message--other {
    background: #89ddff;
    border-color: #1abeff;
  }
`;
