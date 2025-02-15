import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentsPage from './pages/StudentsPage';
import TeachersPage from './pages/TeachersPage';
import './styles/Form.css';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/students" component={StudentsPage} />
                    <Route path="/teachers" component={TeachersPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
