import { HTTP_CLIENT } from "../utils/axiosClient";

const getPrograms = async () => {
  return await HTTP_CLIENT.get("dashboard/programsCount");
};


const getDepartment = async () => {
    return await HTTP_CLIENT.get("dashboard/departmentsCount");
  };
  


export {
    getPrograms,
    getDepartment
};