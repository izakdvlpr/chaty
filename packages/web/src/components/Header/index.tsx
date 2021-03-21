import { useRouter } from 'next/router';

import { Container } from './styles';

export function Header() {
  const router = useRouter();

  function handleCloseTheSession() {
    router.push('/');
  }

  return (
    <Container>
      <p>
        Cha<strong>Ty</strong>
      </p>

      <button type="button" onClick={handleCloseTheSession}>
        Sair do Chat
      </button>
    </Container>
  );
}
