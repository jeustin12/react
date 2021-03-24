import React from 'react';
import people from './data.json'
let numbers = 0;
function allow() {
    
    let position = people.map((e)=>{
    return [e.id];
    });
    let name = people.map((e)=>{
    return [e.name];
    });
    if(numbers < name.length){
    let participants = document.getElementById(position[numbers]);
    document.getElementById('participants').appendChild(participants);
    alert("hola soy " + name[numbers]);
    numbers++;
    }
}

class Move extends React.Component{
    render(){
        return(
            <button onClick={allow}>allow entry</button>
        )
    }
}
export default Move;