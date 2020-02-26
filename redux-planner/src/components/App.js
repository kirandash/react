import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Menu from './ui/Menu'
import ShowErrors from './containers/ShowErrors'
import GoalProgress from './containers/GoalProgress'
import SkiDayCount from './containers/SkiDayCount'
import AddDayForm from './containers/AddDayForm'
import SkiDayList from './containers/SkiDayList'
import NotFound from './containers/NotFound'
import '../stylesheets/index.scss'

function App() {    
    return (
        <Router>
            <div className="app">
                <ShowErrors />
                <div id="page-body">
                    <Switch>
                        <Route path="/" component={SkiDayCount} exact/>
                        <Route path="/ski-day-count" component={SkiDayCount} exact/>
                        <Route path="/add-day" component={AddDayForm} exact/>
                        <Route path="/list-days" component={SkiDayList} exact/>
                        <Route path="/list-days/:filter" component={SkiDayList} exact/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
                <GoalProgress />
                <Menu />
            </div>
        </Router>
    )
}

export default App;