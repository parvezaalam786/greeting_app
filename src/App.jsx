import React from 'react';

function App() {
    let curDate = new Date();
    curDate = curDate.getHours();
    let greet = '';

    const cssStyle = {}; //for inline styling

    if (curDate >= 1 && curDate < 12) {
        greet = 'Good Morning';
        cssStyle.color = 'green';
    }
    else if (curDate >= 12 && curDate < 19) {
        greet = 'Good Afternoon';
        cssStyle.color = 'orange';
    }
    else {
        greet = 'Good Night';
        cssStyle.color = 'black';
    }

    return (
    <div>
        <h1>Hello there, <span style={cssStyle}>{greet}</span>!!</h1>
    </div>
    );
}

export default App;