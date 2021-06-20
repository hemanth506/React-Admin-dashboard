import { useRef } from "react";

import formcss from "./newmeetupform.module.css"

import Card from "../ui/card"

function Newmeetupform(prop) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription,
        }

        // console.log(meetupData)

        prop.onAddnewmeetups(meetupData)

    }
    return <Card>
        <form className={formcss.form} onSubmit={submitHandler}>
            <div className={formcss.control} >
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={formcss.control}>
                <label htmlFor='image'>Meetup Images</label>
                <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div className={formcss.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInputRef} />
            </div>
            <div className={formcss.control}>
                <label htmlFor='description'>Description</label>
                <textarea rows='5' required id='description' ref={descriptionInputRef} />
            </div>
            <div className={formcss.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default Newmeetupform