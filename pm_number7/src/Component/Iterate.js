import React, { Component } from 'react';

class Iterate extends Component {
    render() {
        let ListNames = []
        let ListLast = []
        let ages = []
        const List = [{
            firstName: "Juan",
            secondName: "Dela Cruz",
            age: 21
        },
        {
            firstName: "Mark",
            secondName: "Paul",
            age: 22

        },
        {
            firstName: "Paul",
            secondName: "Mark",
            age: 23
        }]

        List.map((l) => <ul key={l.firstName}>
            {ListNames.push(l.firstName + ", ")}:
            {ListLast.push(l.secondName + ", ")}:
            {ages.push(l.age + ", ")} </ul>)



        return (
            <div>
                <h2> Names : </h2>
                {ListNames}<br />
                <h2> Last Names:</h2>
                {ListLast}<br />
                <h2>Ages :</h2>
                {ages}
            </div>
        )
    }
}

export default Iterate;