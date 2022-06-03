import logo from './logo.svg';
import './App.css';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
export default function App(){
const students=[
  {
    name:"mayuri",
    pic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
  },
  {
    name:"gagan",
    pic:""
  },
  {
    name:"prerana",
    pic:""
  }
]
return(
  <div className='App'>
    {students.map((students)=>(<Message name={students.name} pic={students.pic}/>))}

  </div>
)

function Message(props){

return(
  <div>
   <img
   className='profile-pic'
   src={props.pic} alt={props.name} />
    
  <h1>hello {props.name} 🎉🎉🤩</h1>
  </div>
)
}}
