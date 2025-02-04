import React from 'react';
import './Notification.css';

export default function Notification({type,message}) {
  return (
    <div>
        <div className={type==='error'?'error-text':'success-text'}>
            {message}
        </div>
      
    </div>
  )
}
