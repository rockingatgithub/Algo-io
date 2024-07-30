import axios, { Axios } from "axios";

const SELF_HOSTED_CODE_JUDGE_URL = "http://ec2-54-162-139-27.compute-1.amazonaws.com:2358"


const codeSubmission = async (code: string, language_id: number) => {


    const options = {
        method: 'POST',
        url: SELF_HOSTED_CODE_JUDGE_URL,
        params: {
            base64_encoded: 'true',
            fields: '*'
        },
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            // 'X-RapidAPI-Key': '5d33b59cbdmsh508659090b291fep109f45jsn675cce9d02f4',
            // 'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        data: {
            language_id,
            source_code: btoa(code),
            stdin: 'SnVkZ2Uw'
        }
    };

    try {

        console.log("the options\n\n", options);

        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }


}

export default codeSubmission;