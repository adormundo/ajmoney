import { Summary } from '../Summary';
import { TransactionsTable } from '../TranscationsTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
