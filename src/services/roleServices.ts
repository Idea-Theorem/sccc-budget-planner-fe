import { HTTP_CLIENT } from "../utils/axiosClient";





const createRole = async (data: any) => {
    return await HTTP_CLIENT.post("/role/employee-role", data);
};
const getAllRole = async () => {
    return await HTTP_CLIENT.get("/role/employee-role");
};

const updateRole = async (data: any, id: string) => {
    return await HTTP_CLIENT.put(`/role/employee-role/${id}`, data);
};

const deleteRole = async (id: string) => {
    return await HTTP_CLIENT.delete(`/role/employee-role/${id}`);
};




export {

    createRole,
    getAllRole,
    updateRole,
    deleteRole
};