import { useState } from "react";

export const useDialog = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleOpen = (msg) => {
        setMessage(msg);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setMessage("");
    };

    return {
        open,
        message,
        handleOpen,
        handleClose
    };
};
