const CreateForm = (): JSX.Element => {
  return (
    <form className="create-form">
      <label htmlFor="name" aria-label="Name"></label>
      <input
        className="create-form__input"
        id="name"
        placeholder="Task Name"
        required
      ></input>
      <button className="create-form__button" type="submit">
        Create Task
      </button>
    </form>
  );
};

export default CreateForm;
