import api from "../http-common";

const MyInfo = () => {
  return api.get("/users/myProfile");
};

const get = id => {
  return api.get(`/products/${id}`);
};

const Login = data => {
  return api.post("/auth/login", data);
};

const update = (id, data) => {
  return api.put(`/products/${id}`, data);
};

const remove = id => {
  return api.delete(`/products/${id}`);
};

const removeAll = () => {
  return api.delete(`/products`);
};

const findByTitle = title => {
  return api.get(`/products?title=${title}`);
};

const UserService = {
  MyInfo,
  get,
  Login,
  update,
  remove,
  removeAll,
  findByTitle
};

export default UserService;
