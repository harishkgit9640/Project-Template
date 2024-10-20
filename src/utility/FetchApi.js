import axios from "axios";

export const FetchData = (url) => {
    axios.get(url, {
        headers: {
            'X-Api-Key': 'BQXVUPTyn9i1gmbiHbC/TQ==QkLxjq3GyEwt2OWX'
        },
    }).then((response) => {
        console.log(response.data);

        return response.data;
    })
}
