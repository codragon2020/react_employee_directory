import axios from "axios";

const getUser = {
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
export default getUser;

// export default {
//   getUsers: function () {
//     return axios.get("https://randomuser.me/api/?results=200&nat=us");
//   },
// };
