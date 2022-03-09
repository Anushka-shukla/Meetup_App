import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";


function AllMeetUpsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // to display the data we have in the db
        fetch('https://react-meetupapp-654f0-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            // it will give the data automatically converted from json to a plain js obj
            return response.json();
        }).then(data => {
            
            const meetups = [];
            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
            
            // extract an array of meetups and pass that as a value to the meetups prop on the meetup list
            // setIsLoading(false);
            // setLoadedMeetups(data);
        });
    }, [])

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return <section>
        <h1>All Meetups</h1>
        <ul>
            <MeetupList meetups={loadedMeetups} />
        </ul>

    </section>
}

export default AllMeetUpsPage;

// for every meetup object we are returning a a list item, we need to give key attribute to
// li which will be unique per item