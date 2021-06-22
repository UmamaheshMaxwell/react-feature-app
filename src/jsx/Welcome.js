import React from 'react'

const Welcome = () => {
    // return (  
    //     <div>
    //         <h1>Withoutusing JSX</h1>
    //     </div>
    // );
    
    return React.createElement('div', null, 
           React.createElement('h1', {className: 'jsx-header', 
                                      style: {'color':'red'}}, 
                                'Without using JSX'))
}
 
export default Welcome;
