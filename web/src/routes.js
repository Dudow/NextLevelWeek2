import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Landing from './pages/landing'
import List from './pages/list'
import Form from './pages/form'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/study" component={List}/>
            <Route path="/give-class" component={Form}/>
        </BrowserRouter>
    )
}

export default Routes