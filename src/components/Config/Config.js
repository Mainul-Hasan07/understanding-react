import React from 'react';

const Config = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin:'5px'}}>
            <ul>
                <li style={{ listStyle:'none'}}>Price: {props.price}</li>
                <li style={{ listStyle:'none'}}> steps: {props.steps}</li>
            </ul>
        </div>
    );
};

export default Config;