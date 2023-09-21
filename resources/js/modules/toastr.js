import toastr from "toastr"

export const useToastr = () => {
    const notification = (message, type) => {
        if (typeof message === "string") {
            toastr[type](message);
        } else if (Array.isArray(message)) {
            message.forEach((msg) => toastr[type](msg));
        } else if (typeof message === "object") {
            for (const key in message) {
                if (message.hasOwnProperty(key)) {
                    toastr[type](message[key]);
                }
            }
        }
    };
    return {
        notification,
    };
};
