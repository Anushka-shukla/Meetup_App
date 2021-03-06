import { Link } from 'react-router-dom';
// this class is js object where all the css classes will be property of  this obj
import classes from './MainNavigation.module.css';

function MainNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>

                    <li>
                        <Link to='/new-meetup'>Add New Meetups</Link>
                    </li>

                    <li>
                        <Link to='/favourites'>Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;