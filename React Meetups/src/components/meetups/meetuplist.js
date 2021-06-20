import listcss from "./meetuplist.module.css";

import Meetupitem from "./meetupitem";

function Meetuplist(props) {
  return (
    <ul className={listcss.list}>
      {props.meetups.map((meetup) => (
        <Meetupitem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default Meetuplist;
