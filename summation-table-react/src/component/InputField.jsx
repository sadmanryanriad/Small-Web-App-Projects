const InputField = ({ handleSubmit }) => {
  function add(e) {
    e.preventDefault();
    const nameInput = document.querySelector('input[name="name"]');
    nameInput.focus();
    console.log(nameInput);
    handleSubmit(e);
  }
  return (
    <>
      <form onSubmit={add} className="flex flex-col md:flex-row gap-3">
        <label className="input input-bordered flex items-center gap-2">
          <span className="text-gray-400">Name: </span>
          <input
            required
            type="text"
            name="name"
            className="grow"
            placeholder=""
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className="text-gray-400">Amount: </span>
          <input
            required
            type="number"
            name="amount"
            className="grow"
            placeholder=""
          />
        </label>
        <input
          type="submit"
          value="Add"
          className="btn btn-neutral px-10 text-xl"
        />
      </form>
    </>
  );
};

export default InputField;
