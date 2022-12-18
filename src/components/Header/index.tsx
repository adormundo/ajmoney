import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className='logo'>
          <img src={logoImg} alt="aj money" />
          <h1>aj money</h1>
        </div>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
