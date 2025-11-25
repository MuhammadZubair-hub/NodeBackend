export const ApiError = ({
     message,
    success,
    data, }) => {



    return {
        success: success,
        message: message,
        data: data
    };

}