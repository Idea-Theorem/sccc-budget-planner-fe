import { HTTP_CLIENT } from "../utils/axiosClient";


const createProgram = async (data: any) => {
    return await HTTP_CLIENT.post("/program", data);
  };

const getProgram = async () => {
    return await HTTP_CLIENT.get("/program");
  };



//   const updateEmployee = async (data: any, id: string) => {
//     return await HTTP_CLIENT.put(`/user/${id}`, data);
//   };
  
// const deleteEmployee = async (id: string) => {
//     return await HTTP_CLIENT.delete(`/user/${id}`);
//   }





export {
    createProgram,
    getProgram,
//   deleteEmployee,
//   updateEmployee
};