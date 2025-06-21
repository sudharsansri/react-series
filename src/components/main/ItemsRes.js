import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../utlis/UserContext';



export const ItemsRes = ({item,showIndex,selected,current}) => {
   
  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <div>
        <h1>Items</h1>
        <ul className='text-center'>
            
            <li  className='border-2 border-black m-2 p-2  bg-amber-100' 
            onClick={() => showIndex()}>
                <h2>{item.title}</h2>
                {current===selected && <p>{item.content}</p>}
                
            </li>
          
        </ul>
    </div>
  )
}

//lifting state up is a technique in React where you move the state from a child component to a parent component to share data between components. This allows multiple components to access and update the same state, enabling better communication and synchronization of data across the application. It helps in managing state more effectively and avoiding prop drilling, where props are passed down through multiple layers of components unnecessarily.

// context api

// usercontext.provider is a component that allows you to create a context in React, which is a way to share data between components without having to pass props down through every level of the component tree. It provides a way to create a global state that can be accessed by any component in the application, making it easier to manage and share data across different parts of the app. This helps avoid prop drilling and makes the code cleaner and more maintainable.
// by using provider we can over ride the default value of the context, allowing us to provide a specific value that can be accessed by any component that consumes the context. This is useful for sharing data like user information, themes, or settings across the application without having to pass props down through every level of the component tree.

// redux is mandatoery log data set, use redux wisely

// buid a store and conntect a store to an app