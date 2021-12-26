import { AppStyled } from './App.styled';
import { lazy } from 'react';
const AutoCompleteDisconnected = lazy(() =>
  import(
    '../components/AutoComplete/AutoCompleteDisconnected/AutoCompleteDisconnected'
  )
);
const AutoCompleteConnected = lazy(() =>
  import(
    '../components/AutoComplete/AutoCompleteConnected/AutoCompleteConnected'
  )
);

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
    <AutoCompleteConnected
      getFetchUrl={searchText =>
        `https://api.datamuse.com/words?sp=*${searchText}*`
      }
    />
  </AppStyled>
);

export default App;
