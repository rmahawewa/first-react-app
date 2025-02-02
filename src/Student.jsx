export const AddStudent = () => {
  return (
    <>
      <div className="form_container">
        <form>
          <h1>Add Student</h1>
          <div className="form_group">
            <label>Student name</label>
            <input type="text" id="student_name" name="student_name" />
          </div>
          <div className="form_group">
            <label>Student birthday</label>
            <input type="date" id="student_birthday" name="student_birthday" />
          </div>
          <div className="form_group">
            <label>Student address</label>
            <input type="text" id="student_address" name="student_address" />
          </div>
          <div className="submit_btns">
            <input
              type="submit"
              id="submit_buttn"
              className="btns"
              value="submit"
            />
            <input
              type="button"
              id="clear_buttn"
              className="btns"
              value="clear"
            />
          </div>
        </form>
      </div>
    </>
  );
};
