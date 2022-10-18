import React, { useContext } from 'react'
import formContext from '../context/context';

function CardList() {
  const { formListInfo } = useContext(formContext)
  return(
    <ul>
      {formListInfo.map((infos) => (
        <li>
          Nome: {infos.nome}, 
          Idade: {infos.idade}, 
          Cidade: {infos.cidade}, 
          Language: {infos.language}, 
        </li>
      ))}
    </ul>
  )
}

export default CardList;