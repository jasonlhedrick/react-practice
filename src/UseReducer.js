import React, {useReducer} from 'react';

const people = [
    {name: 'Jay', alive: true},
    {name: 'Kailee', alive: true},
    {name: 'John', alive: true},
    {name: 'Mia', alive: true}
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

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, people);
    
    function devour(name) {
        dispatch({type: 'chomp', payload: name});
    }

    function spitOut(name) {
        dispatch({type: 'revive', payload: name});
    }

    return (
        <div>
            {state.map((person, idx) => {
                return (<div key={idx} style={{display: 'flex', width: '50%', justifyContent: 'space-around'}}>
                    <div>{person.name}</div>
                    {person.alive ?
                    <div>✨✨ ALIVE! ✨✨<button onClick={() => devour(person.name)}>Devour</button></div> :
                    <div>☠ ☠ DEAD ☠ ☠<button onClick={() => spitOut(person.name)}>Revive</button></div>
                    }
                </div>)
            })}
        </div>
    )
}

export default UseReducer;