import React from 'react'
import ReactDOM from 'react-dom'
import App from './scene/index'

// Style
import grid from './style/style'
import Style from './style/style'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
     <BrowserRouter>
        <App />
     </BrowserRouter>,
    document.getElementById('root')   
)