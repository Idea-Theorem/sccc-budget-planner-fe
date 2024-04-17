import { HTTP_CLIENT } from "../utils/axiosClient";


const createProgram = async (data: any) => {
    return await HTTP_CLIENT.post("/program", data);
  };

  const getAllProgramsViaStatus = async (status: any) => {
    return await HTTP_CLIENT.get(`/program/?status=${status}`);
  };


// const getEmployee = async () => {
//     return await HTTP_CLIENT.get("/user");
//   };
const getProgram = async (status: any) => {
    return await HTTP_CLIENT.get(`/program/?status=${status}`)
  };
  
  const programUpdate = async (data: any, id: string) => {
    return await HTTP_CLIENT.put(`/program/${id}`, data);
  };

  const updateProgram = async (data: any) => {
    return await HTTP_CLIENT.put(`/program/updateStatus`, data);
  };
  
// const deleteEmployee = async (id: string) => {
//     return await HTTP_CLIENT.delete(`/user/${id}`);
//   }





export {
    createProgram,
    getAllProgramsViaStatus,
   programUpdate,
updateProgram,
    getProgram,

};