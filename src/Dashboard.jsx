import { AddStudent } from "./Student.jsx";

export const Dashboard = () => {
  return (
    <>
      <div className="dashboard-content">
        <div className="side-bar">
          <div>
            <button>Add Student</button>
          </div>
          <div>
            <button>View Student</button>
          </div>
        </div>
        <div className="content">
          <AddStudent />
        </div>
      </div>
    </>
  );
};
