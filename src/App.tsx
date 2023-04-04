//.tsx for typescript
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from "./components/Person"
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from "./components/generics/List"
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './Templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';

//"hover on "App", shows that it is a function that returns a jsx element" - Type Inference
function App() { //root component
  return (
    <div className='App'>
      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  )

/* <Toast position="center"/> */

/* <RandomNumber value={10} isPositive /> */

/*  <div className='App'>
      <List
        items={["batman", "Superman", "Wonder Women"]}
        onClick={(item) => console.log(item)}
      />  
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      />
      <List
        items = {[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne"
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent"
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana"
          }
        ]}
        onClick={(item) => console.log(item)}
      />   
    </div>
*/

/* <Private isLoggedIn={true} component={Profile}/> */
 
/*
  <UserContextProvider>
    <User />
  </UserContextProvider>
*/

  /* const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]
  return (
    <div className="App"> 
      <Greet name="David" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading"/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
        console.log("Button clicked", event, id)
        }}
      />
      <Input value="" handleChange={event => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  ); */
}

export default App;
