import { useContext, useState, useEffect } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";
import styled from 'styled-components'
import { Header } from "./Header";
import { ThemeContext } from "./contexts/ThemeContext";

const Container = styled.div`
  height: 100vh;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`


function App({ data }) {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);

  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    console.log('App.js:useEffect');
    fetchLangugages();
  }, [])

  const fetchLangugages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  }

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab} />
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </Container>
  )

}
export default App;
