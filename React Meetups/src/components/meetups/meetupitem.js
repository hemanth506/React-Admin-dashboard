import itemcss from "./meetupitem.module.css";

import Card from "../ui/card";

import { useContext } from "react";

import favourite_context from "../../store/favourites-context";

function Meetupitem(props) {
  const favCtx = useContext(favourite_context);

  const checkItemIsFav = favCtx.itemIsFavourite(props.id);

  function toggleBtwFav() {
    if (checkItemIsFav) {
      // already it is added tofavourites
      favCtx.removeFavourite(props.id);
    } else {
      favCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={itemcss.item}>
      <Card>
        <div className={itemcss.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={itemcss.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={itemcss.actions}>
          <button onClick={toggleBtwFav}>
            {checkItemIsFav ? "Remove From Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default Meetupitem;
