import React, {useReducer, useState} from 'react';

const people = [
    {name: 'Jason', alive: true},
    {name: 'Bob', alive: true},
    {name: 'Eilaura', alive: true},
    {name: 'Lisa', alive: true}
]

const reducer = (people, action) => {
    if (action.type === 'chomp') {
        return people.map(person => {
            if (person.name === action.payload) {
                person.alive = false;
            }
            return person;
        });
    }
    if (action.type === 'revive') {
        return people.map(person => {
            if (person.name === action.payload) {
                person.alive = true;
            }
            return person;
        });
    }
}

function UseReducer1() {
    const [state, dispatch] = useReducer(reducer, people);
    const [name, setName] = useState('');
    
    function devour(name) {
        dispatch({type: 'chomp', payload: name});
    }

    function revive(name) {
        dispatch({type: 'revive', payload: name});
    }

    function addPerson(event) {
        event.preventDefault()
        state.push({name: name, alive: true});
        // Update the state by clearing the name after pushing it to the the person array.
        setName('');
    }

    return (
        <div>
            {state.map((person, idx) => {
                return (
                <div key={idx} 
                style={
                    {display: 'flex', 
                    width: '50%', 
                    justifyContent: 'space-around'}
                }>
                    <div>{person.name}</div>
                    {person.alive ?
                        <div>✨✨ ALIVE! ✨✨
                            <button onClick={() => devour(person.name)}>Devour</button>
                        </div> 
                        :
                        <div>☠ ☠ DEAD ☠ ☠
                            <button onClick={() => revive(person.name)}>Revive</button>
                        </div>
                    }
                </div>
                )
            })}
            <input value={name} onChange={(event) => setName(event.target.value)}/>
            <button onClick={(event) => addPerson(event)}>Add</button>
        </div>
    )
}

export default UseReducer1;