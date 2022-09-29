import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions-container'>
            <details className='ques-ans'>
                <summary className='ques'>1. How does React works?</summary>
                <div className='ans'><strong>React implements a virtual DOM</strong> that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser DOM.Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.
                </div>
            </details>
            <details className='ques-ans'>
                <summary className='ques'>2. The advantages of useEffect.</summary>
                <div className='ans'><strong>useEffect method clean up</strong> event listeners when the component unmounts. It performs an action when state or props change. It is used to optimize the Dependency Array correctly. useEffect method use to prevent unnecessary re-renders even when nothing changes. There is no need to touch upon other lifecycle methods.
                </div>
            </details>
            <details className='ques-ans'>
                <summary className='ques'>3. Differences between props and state.</summary>
                <div className='ans'><strong>Props: </strong>The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only. Props are used to pass data from one component to another.<br /><br />
                    <strong>State: </strong>The Data is passed within the component only. It is Mutable (can be modified). State can be used only with the state components/class component (Before 16.0). State is both read and write. The state is a local data storage that is local to the component only and cannot be passed to other components.
                </div>
            </details>
        </div>
    );
};

export default Questions;