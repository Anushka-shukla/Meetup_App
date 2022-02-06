import MeetupList from "../components/meetups/MeetupList";


// holds array of dummy meetups
const DUMMYY_DATA = [
    {
        id: 'm1',
        title: 'This is the first meetup',
        image: 'https://source.unsplash.com/600x400/?computer, meetup',
        address: 'Meetupstreet 5, 3421 NY City',
        description: 'This is the first meet up which you should not miss. It will be graced by some awsome developers around the world!'
    },

    {
        id: 'm2',
        title: 'This is the much awaited React Meetup-2.0',
        image: 'https://source.unsplash.com/600x400/?computer, cafe',
        address: 'Meetupstreet 5, 3421 NY City',
        description: 'This is the first meet up which you should not miss. It will be graced by some awsome developers around the world!'
    },

    {
        id: 'm3',
        title: 'This is the 3rd meetup',
        image: 'https://source.unsplash.com/600x400/?computer, coding',
        address: 'Meetupstreet 5, 3421 NY City',
        description: 'This is the first meet up which you should not miss. It will be graced by some awsome developers around the world!'
    },

    {
        id: 'm4',
        title: 'This is the 4th meetup',
        image: 'https://source.unsplash.com/600x400/?computer, house',
        address: 'Meetupstreet 5, 3421 NY City',
        description: 'This is the first meet up which you should not miss. It will be graced by some awsome developers around the world!'
    }

];

function AllMeetUpsPage() {
    return <section>
        <h1>All Meetups</h1>
        <ul>
            <MeetupList meetups={DUMMYY_DATA}/>
        </ul>

    </section>
}

export default AllMeetUpsPage;

// for every meetup object we are returning a a list item, we need to give key attribute to
// li which will be unique per item