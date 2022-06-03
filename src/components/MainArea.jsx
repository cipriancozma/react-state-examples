import React, { useContext } from 'react'
import AppContext from '../AppContext';

function MainArea() {
    const state = useContext(AppContext);


  return (
    <div className="main-area" style={{ color: state.color, fontSize: `${state.size}px`}}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod
          obcaecati dolore debitis amet aut, excepturi voluptas ratione
          quibusdam laboriosam, optio pariatur provident doloremque consequatur
          animi? Consequuntur, officiis. Explicabo, vel.
        </p>
      </div>
  )
}

export default MainArea