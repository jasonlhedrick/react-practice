import React, {useReducer, useState} from 'react';

const people = [
    {name: 'Hello', alive: true},
    {name: 'Goodbye', alive: true}
]

const reducer = (people, action) => {
    if (action.type === 'chomp') {
        return people.map(person => {
            if (person.name === action.payload) person.alive = false;
            return person;
        });
    }
    if (action.type === 'revive') {
        return people.map(person => {
            if (person.name === action.payload) person.alive = true;
            return person;
        })
    }
}

function UseReducer2() {
    const [state, dispatch] = useReducer(reducer, people);
    const [name, setName] = useState('');

    function devour(name) {
        dispatch({type: 'chomp', payload: name});
    }

    function revive(name) {
        dispatch({type: 'revive', payload: name});
    }

    return (
        <div>
            {people.map((person, idx) => {
                return (
                    <div key={idx}
                    style={{display: 'flex', width: '50%', justifyContent: 'space-around'}}>
                        <div>{person.name}</div>
                        {person.alive ?
                        <div>
                            Alive
                            <button onClick={() => devour(person.name)}>Devour</button>
                        </div>
                        :
                        <div>
                            Dead
                            <button onClick={() => revive(person.name)}>Revive</button>
                        </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default UseReducer2;