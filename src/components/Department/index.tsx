import DepartmentButton from "../DepartmentButton";
import ProgressProgram from "../ProgressProgram";

const Department = () => {
  const departmentData = [
    { iconColor: "purple", buttonText: "Recreation & Culture" },
    { iconColor: "mainly-green", buttonText: "Health & Wellness" },
    { iconColor: "titanium-yellow", buttonText: "Finance" },
    { iconColor: "light-yellow", buttonText: "Human Resources" },
    { iconColor: "sky-blue", buttonText: "Events & Community" },
    { iconColor: "similar-pantone", buttonText: "Department 3" },
    { iconColor: "dark-green", buttonText: "Department 6" },
    { iconColor: "indigo", buttonText: "Department 8" },
    { iconColor: "light-yellow", buttonText: "Department Name" },
    { iconColor: "deep-sky-blue", buttonText: "Department Name" },
  ];

  return (
    <div className="department_block">
      <h2>Department %</h2>
      <div className="department_list_wrap d-flex flex-wrap">
        {departmentData.map((department, index) => (
          <DepartmentButton
            key={index}
            iconColor={department.iconColor}
            buttonText={department.buttonText}
          />
        ))}
      </div>
      <ProgressProgram />
    </div>
  );
};

export default Department;
