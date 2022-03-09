import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpsPage(){
    // gives us history obj, and gives us some methods that allow us to manipulate the browser
    const navigate = useNavigate();

    function addMeetUpHandler(meetupData){
        // we can use fetch func to send http request - also add ".json" 
        fetch('https://react-meetupapp-654f0-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }// we want to navigate away after the data is submitted
        ).then(() => {
            // to go to the starting page
            navigate('/');
        });
    }


    return (<section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
    );
}

export default NewMeetUpsPage;