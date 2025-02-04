import React from 'react'

export default function UserProfile({name,img}) {
  return (
    <div>
        <h3>User name: {name}</h3>
        <img src={img} alt="user image" />
      
    </div>
  )
}
