import { useContext } from 'react';

import FavoritesContext from '../components/store/favourites-context';
import MeetupList from '../components/meetups/MeetupList'

function FavouritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favourites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavouritesPage;