import './App.css';
import Greet from './1.components/functional/Greet';
import Wish from './1.components/class/Wish';
import Welcome from './2.jsx/Welcome';
import Greeting from './3.props/Greeting'
import Welcome1 from './3.props/Welcome'
import Message from './4.state/Message';
import Counter from './4.state/Counter';
import Student from './5.destructuring/1.props/Student';
import Person from './5.destructuring/2.state/Person';
import FunctionClick from './6.event-handling/FunctionClick';
import ClassClick from './6.event-handling/ClassClick';
import EventBind from './6.event-handling/EventBind';
import Parent from './7.parent-child/Parent';
import UserGreeting from './8.conditional-rendering/UserGreeting';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1>
      <Greet />
      <Wish />
      <Welcome />
      <Greeting  name="Uma" heroName="Superman">
        <p>This is paragraph</p>
      </Greeting>
      <Greeting  name="Swathi" heroName="Wonder Woman">
        <button>Action</button>
      </Greeting>
      <Greeting  name="Jagrav" heroName="Hercules">
        <p>He is hercules, He is stronger than both Thor and Hulk</p>
      </Greeting>
      <Welcome1 name="Manasvi" heroName="Captain Marvel">
        <p>She is Captian Marvel, she has got energy absorption powers !!!</p>
      </Welcome1>
      <Welcome1 name="Ritu" heroName="Storm">
      <p>She is Strom, calm personality and regal manner !!!</p>
      </Welcome1>      
      <Welcome1 name="Hani" heroName="The Wasp" >
      <p>She is the wasp, Can shrink to roughly the size of an insect and back​,</p>
      </Welcome1>
      <Welcome1 name="Sambhav" heroName="Iron Man" >
      <p>He is Iron Man, He is the INVINCIBLE IRON MAN!</p>
      </Welcome1>
      <Message />
      <Counter />
      <Student name="Jagrav" heroName="Dream" />
      <Student name="Hani" heroName="TechnoBlade" />
      <Person name="Ritu" heroName="Roblox" /> */}
      {/* <FunctionClick />
      <ClassClick />
      <EventBind /> */}
      {/* <Parent /> */}
      <UserGreeting />
    </div>
  );
}

export default App;
