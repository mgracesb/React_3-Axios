import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID AWDu16_pb8ceGsPbXbxji3TD7sTsu6eJNpioRYj6YYQ",
  },
});
