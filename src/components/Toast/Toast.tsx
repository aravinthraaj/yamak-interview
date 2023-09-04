// import React, { useEffect, useState } from 'react';
// import './Toast.css';

// interface ToastProps {
//   message: string;
//   duration?: number;
// }

// const Toast: React.FC<ToastProps> = ({ message, duration = 3000 }) => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     setShow(true);
//     const timer = setTimeout(() => setShow(false), duration);
//     return () => clearTimeout(timer);
//   }, [duration]);

//   return (
//     <div className="toast-container">
//       <div className={`toast ${show ? 'show' : ''}`}>
//         {message}
//       </div>
//     </div>
//   );
// };

// export default Toast;

import React, { useEffect, useState } from "react"
import "./Toast.css"

interface ToastProps {
  message: string
  duration?: number
  onHide: () => void
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onHide }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => {
      setShow(false)
      onHide() // Call the callback to hide the toast
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onHide])

  const animationDuration = `${duration / 1000}s`

  return (
    <div className="toast-container">
      <div className={`toast ${show ? "show" : ""}`}>
        <div className="loader-bar">
          <div className="loader-fill" style={{ animationDuration }}></div>
        </div>
        <div className="toast-message">{message}</div>
      </div>
    </div>
  )
}

export default Toast
