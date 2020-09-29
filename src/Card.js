import React from 'react';

export function Card(props) {
    return(
       <div className ="card">
            {props.children}
        <div className ="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
       </div>
    );
}
