import React, { useState } from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is  the favourite front end javascript framework among developers'
  },
  {
    title: 'How to use React?',
    content: 'React is used by creating components'
  }
]


const options = [
  {
    label: 'RED',
    value: 'red'
  },
  {
    label: 'BLUE',
    value: 'blue'
  },
  {
    label: 'GREEN',
    value: 'green'
  },
]


function App() {
  const [selected, setSelected] = useState(options[0])
  return (
    
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
}
export default App;
