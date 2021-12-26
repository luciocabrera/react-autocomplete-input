import { AppStyled } from './App.styled';
import AutoCompleteDisconnected from '../components/AutoComplete/AutoCompleteDisconnected/AutoCompleteDisconnected';

const App = () => (
  <AppStyled>
    <AutoCompleteDisconnected
      items={[
        'Angular',
        'Blitzjs',
        'Gatsby',
        'Reactjs',
        'Vuejs',
        'Svelte',
        'Nextjs',
        'Node',
        'Java',
        'MongoDB',
        'Postgres',
        'MySql',
        'Express',
        'Sails',
        'Loopback',
        'React-router',
        'Redux',
        'Flux',
        'Yarn',
        'Npm'
      ]}
    />
  </AppStyled>
);

export default App;
