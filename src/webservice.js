import axios from "axios";
export async function postApit(url, data) {
  await fetch("https://bftrlhhwv6.execute-api.us-east-1.amazonaws.com/dev"+url, {
    method: "POST",
    mode: "no-cors",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(data),
  }).then((resp) => {
    console.log(resp);
  }).catch((err)=>{
    console.log(err);
  })

//   const baseUrl = "https://bftrlhhwv6.execute-api.us-east-1.amazonaws.com/dev/";
//   return new Promise((resolve, reject) => {
//     axios
//       .post(baseUrl + url, data)
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
}
