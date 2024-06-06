import { HTTP_CLIENT } from "../utils/axiosClient";


const createProgram = async (data: any) => {
  return await HTTP_CLIENT.post("/program", data);
};
const addComments = async (data: any) => {
  return await HTTP_CLIENT.post("/program/comments", data);
};
const getAllProgramsViaStatus = async (status: any, Searchvalue: string) => {
  return await HTTP_CLIENT.get(`/program/?status=${status}&name=${Searchvalue ? Searchvalue : ""}`);
};
const getAllProgramsByUsers = async (status: any, Searchvalue: string) => {
  return await HTTP_CLIENT.get(`/program/fetchProgramByUser/?status=${status}&name=${Searchvalue ? Searchvalue : ""}`);
};

// const getEmployee = async () => {
//     return await HTTP_CLIENT.get("/user");
//   };
const getProgram = async (status: any) => {
  return await HTTP_CLIENT.get(`/program/?status=${status}`)
};
const getDepartments = async () => {
  return await HTTP_CLIENT.get(`/department`)
};
const programUpdate = async (data: any, id: string) => {
  return await HTTP_CLIENT.put(`/program/${id}`, data);
};

const updateProgram = async (data: any) => {
  return await HTTP_CLIENT.put(`/program/updateStatus`, data);
};

const deleteProgram = async (id: string) => {
  return await HTTP_CLIENT.delete(`/program/${id}`);
}

const deleteComment = async (id: string) => {
  return await HTTP_CLIENT.delete(`/program/comment/${id}`);
}
const getDepartmentOnRowCLick = async (id: string) => {
  return await HTTP_CLIENT.get(`/department/programs/${id}`);
}
const getSingleProgramById = async (id: string) => {
  return await HTTP_CLIENT.get(`/program/byId/${id}`);
}
const fetchAllcomments = async () => {
  return await HTTP_CLIENT.get(`/program/comments`);
}
const updatecomment = async (id: any, data: any) => {
  return await HTTP_CLIENT.put(`/program/comment/${id}`, data);
};



export {
  createProgram,
  getDepartments,
  getAllProgramsViaStatus,
  programUpdate,
  updateProgram,
  getProgram,
  deleteProgram,
  getDepartmentOnRowCLick,
  addComments,
  fetchAllcomments,
  getSingleProgramById,
  deleteComment,
  updatecomment,
  getAllProgramsByUsers

};