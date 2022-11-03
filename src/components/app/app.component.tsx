import S from './app.styles';

import Navbar from '@/features/navbar/navbar.component';
import { useFetchUsersQuery } from '@/services/api.slice';

const App = () => {
  const { data}  = useFetchUsersQuery();
  console.log(data);

  return (
    <S.AppContainer>
      <Navbar />
    </S.AppContainer>
  );
};

export default App;
