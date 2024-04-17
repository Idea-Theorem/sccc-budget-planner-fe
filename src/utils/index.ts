import moment from "moment";

export const getLocalStorage = (name: string, parse = true) => {
  try {
    if (parse) {
      return JSON.parse(localStorage.getItem(name) || "");
    } else {
      return localStorage.getItem(name);
    }
  } catch (e) {
    return undefined;
  }
};

export const  modifyCreatedAt = (array: any) => {
const arrayd = array.forEach((obj: any) => {
      obj.created_at = moment(obj.created_at).format('MMMM Do YYYY'); // Modify the date format as per your requirement
  });
  return arrayd
}
