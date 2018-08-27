import axios from 'axios';


export function getMatchData(status) {
    axios.get("http://192.168.8.101:8102/init/getTeamData", {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        params: {
            status:status
        },
    }).then((responseData) => {

        return responseData.data.matches

    })
        .catch((error) => {
            console.warn(error);
            return false;
        });


    // axios.get("http://192.168.8.102:8102/init/getTeamData").then(res => {
    //     alert("Received Successful response from server!");
    // }, err => {
    //     alert("Server rejected response with: " + err);
    // });


}