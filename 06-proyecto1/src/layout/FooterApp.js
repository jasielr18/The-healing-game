import React from 'react'

export const FooterApp = () => {

  const currentAnio = new Date().getFullYear();

  return (
 <footer className="footer">
            &copy; Jasiel Ramirez Suriel || <span>{currentAnio}</span>
        </footer>
  )
}
