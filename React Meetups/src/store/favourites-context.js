import { createContext, useState } from "react";

// declaring that as an empty values and array
const favourite_context = createContext({
    favourites : [],
    total_favourites : 0,
    addFavourite : (favouritemeetups) => {},
    removeFavourite : (meetupId) => {},
    itemIsFavourite : (meetupId) => {}
})

// useState is used to update changes whenever the state changes
export function FavouriteContentProvider(props) {
    const [userfavourite, setuserfavourite] = useState([]);

    function addFavouriteHandler(favouriteMeetups) {
        setuserfavourite((prevFavourite) => {
            return prevFavourite.concat(favouriteMeetups)
        })
    }

    function removeFavouriteHandler(meetupId) {
        setuserfavourite((prevFavourite) => {
            return prevFavourite.filter((meetup) => meetup.id !== meetupId)
        })
    }

    function itemIsFavouriteHandler(meetupId) {
        return userfavourite.some(meetup => meetup.id === meetupId)
    }

    // declaring the recently updated values
    const context = {
        favourite : userfavourite,
        total_favourites : userfavourite.length,
        addFavourite : addFavouriteHandler,
        removeFavourite : removeFavouriteHandler,
        itemIsFavourite : itemIsFavouriteHandler
    }

    return <favourite_context.Provider value={context}>
        {props.children}
    </favourite_context.Provider>
}

export default favourite_context;