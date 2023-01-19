import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import ProfilePage from './pages/ProfilePage';
import './styles/Main.css';

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" exact component={CoursesPage} />
                <Route path="/courses/:id" component={CoursePage} />
                <Route path="/profile" component={ProfilePage} />
            </Switch>
        </main>
    );
}

export default Main;