import React from 'react';

const Warning = ({ tryAgain }) => {
    return (
        <div>
            <h2>Error on fetching data</h2>
            <button type="button" onClick={tryAgain}>Try again</button>
        </div>
    );
};

export default Warning;