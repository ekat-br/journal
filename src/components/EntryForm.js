export default function EntryForm() {
  return (
    <form>
      <h2>NEW ENTRY</h2>
      <label htmlFor="motto">Motto</label>
      <input type="text" id="motto"></input>
      <label htmlFor="notes">Notes</label>
      <input type="text" id="notes"></input>
      <button type="submit">Create</button>
    </form>
  );
}
