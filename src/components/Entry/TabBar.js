import { Fragment } from "react";

//tab bar with badge with the numbe rof entries
export default function TabBar() {
  return (
    <section className="tabBar">
      <p className="allEntriesText">All Entries</p>
      <button className="allEntriesButton"> 3</button>
      <p className="FavoritesText">Favorites</p>
      <button className="FavoritesButton">1</button>
    </section>
  );
}
