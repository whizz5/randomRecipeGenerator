import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const SummaryPanel = (props) => {
    

    return (
        <div>
            <p>
            {ReactHtmlParser(props.summary)}
            </p>
        </div>
    );
};

export default SummaryPanel;