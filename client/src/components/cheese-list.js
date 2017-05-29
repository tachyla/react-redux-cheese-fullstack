import React from 'react';

export class CheeseList extends React.Component {
    constructor(props){
        super(props);

        this.props.dispatch(fetchCheeses());
    }
    return(
       <ul>
           <li>Cheese 1</li>
           <li>Cheese 2</li>
           <li>Cheese 3</li>
       </ul>
       )
};

export default CheeseList;
