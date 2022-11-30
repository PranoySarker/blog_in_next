import useSWR from 'swr';

// const baseURL = process.env.baseURL;


const response = (...args) => fetch(...args).then(res => res.json())


export default function featcher(endpoint) {
    // console.log(baseURL, endpoint);
    const { data, error } = useSWR(`http://localhost:3000/${endpoint}`, response)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}