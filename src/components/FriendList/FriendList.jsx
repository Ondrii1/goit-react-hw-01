import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {
        friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem item={friend} />
          </li>
        ))
      }
    </ul>
  );
};