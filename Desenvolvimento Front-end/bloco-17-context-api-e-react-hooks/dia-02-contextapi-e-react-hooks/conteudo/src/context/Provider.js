import React, { useState } from 'react'
import formContext from './context';

function Provider({ children }) {
  const [formListInfo, setFormListInfo] = useState([]);

  const addInfo = (infos) => {
    setFormListInfo((prevState) => ([
      ...prevState, infos
    ]))
  }

  const context = {
    addInfo,
    formListInfo,
  }

  return (
    <formContext.Provider value={context} >
      {children}
    </formContext.Provider>
  )
}

export default Provider;
