// Read in your .env file
require("dotenv").config();
// HTTP request library
const axios = require("axios")

// Set up request options
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
    // Make request to Monday.com API
    const response = await axios.get("https://api.monday.com/v2/", options);
    
    console.log(response.data.data);
    return;
} 

getData();