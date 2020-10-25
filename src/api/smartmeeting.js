import axios from "axios";

export default axios.create({
  baseURL: "http://smart-meeting.herokuapp.com",
  headers: { "Content-Type": "application/json", token: "a123gjhgjsdf6576" }
});
