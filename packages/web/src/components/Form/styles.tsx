import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;

  margin: 0 15px;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background: var(--blue);

  p {
    padding: 1.25rem 0;

    font-size: 2rem;
  }

  p,
  strong {
    color: var(--shape);
  }
`;

export const Main = styled.main`
  width: 100%;

  background: var(--shape);
`;

export const FormWrapper = styled.form`
  padding: 2rem;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.25rem;

  font-size: 1.25rem;
  font-weight: 500;

  color: var(--text-title);
`;

export const Input = styled.input`
  width: 100%;
  height: 3.5rem;

  padding: 0 1.5rem;

  font-weight: 400;
  font-size: 1rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: #e7e9ee;

  &::placeholder {
    color: var(--text-body);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;

  padding: 0 1.5rem;
  margin-top: 2.5rem;

  font-size: 1rem;
  font-weight: 600;

  color: var(--shape);

  border: 0;
  border-radius: 0.25rem;

  background: var(--blue);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
