require("dotenv").config();
const axios = require("axios")

const options = {
    responseType: "json",
    headers: {
        // Reads from your .env file
        "Authorization": process.env.MONDAY_TOKEN
    },
    data: {
        // GraphQL query here
        query: "{boards(limit:5){id name}}"
    }
}

const getData = async () => {
    const response = await axios.get("https://api.monday.com/v2/", options);
    console.log(response.data.data);
    return;
} 

getData();