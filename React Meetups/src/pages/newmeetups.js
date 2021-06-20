import Newmeetupform from "../components/meetups/newmeetupform"

import { useHistory } from "react-router-dom"

function Newmeetupspage(){
    const history = useHistory();
    function sendmeetups(meetups){
        
        fetch("https://react-db-abce9-default-rtdb.firebaseio.com/meetups.json",
        {
            method:"POST",
            body:JSON.stringify(meetups)
        })
        .then(()=>{
            alert("Uploaded Successfully")
            history.replace("/")
        })

    }
    return <section>
        <h2>Add New Meetups</h2>
        <Newmeetupform onAddnewmeetups={sendmeetups}/>
    </section>

}

export default Newmeetupspage