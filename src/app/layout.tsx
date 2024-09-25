import React from 'react'
import '@/assets/styles/global.css'
const MainLayout = ({children}) => {
    return (
        <html>
            <head></head>
            <body>
                <div>
                    <p>{children}</p>
                </div>
            </body>
       </html>
  )
}

export default MainLayout