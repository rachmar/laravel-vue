import toastr from "toastr";

export const useToastr = () => {
    const showToast = async (message, type) => {
        await new Promise((resolve) => {
            toastr.options = {
                progressBar: true,
                timeOut: "2000",
            };
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
            resolve(true);
        });
    };
    return {
        showToast,
    };
};
