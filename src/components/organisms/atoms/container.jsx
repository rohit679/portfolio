import React from 'react';

const Container = ({ children, classname='' }) => {
  return (
    <div className={`px-[200px] ${classname}`}>
      {children}
    </div>
  )
}

export default Container;
