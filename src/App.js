import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/courses" exact component={CoursesPage} />
                    <Route path="/courses/:id" component={CoursePage} />
                    <Route path="/profile" component={ProfilePage} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
