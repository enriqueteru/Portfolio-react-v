const urlBase: string = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/" ; // localhost:3002/
const token: string = localStorage.getItem("token") || "";


const fetchSinToken = (endpoint: string, data: any, method: string = "GET") => {
  const url = `${urlBase}/${endpoint}`;
  console.log(url);

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": "*",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchConToken = (endpoint: string, data: any, method: string = "GET") => {
  const url = `${urlBase}/${endpoint}`;
  console.log(url);

  if (method === "GET") {
    return fetch(url, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
  } else if (method === "DELETE") {
    return fetch(url, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
  } else {
    return fetch(url, {
      method: method,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }
};


export { fetchConToken, 
         fetchSinToken };
