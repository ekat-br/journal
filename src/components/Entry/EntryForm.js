export default function EntryForm() {
  return (
    <form className="form">
      <h2 class="form__title">NEW ENTRY</h2>
      <label htmlFor="motto" className="labelForm">
        Motto
      </label>
      <input type="text" id="motto" className="MottoInput"></input>
      <label htmlFor="notes" className="labelForm">
        Notes
      </label>
      <textarea type="text" id="notes" className="NotesInput"></textarea>
      <button type="submit" className="createButton">
        Create
      </button>
    </form>
  );
}
