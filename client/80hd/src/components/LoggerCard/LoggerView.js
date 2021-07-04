import React from 'react';
import ExpandableCard from '../ExpandableCard';

function LoggerView({ selector, cardTitle, expandHeight }) {
  console.log(expandHeight);

  return (
    <>
      <ExpandableCard cardTitle={cardTitle} expanded={false} expandHeight={expandHeight}>
        {selector}
      </ExpandableCard>
    </>
  );
}

export default LoggerView;
