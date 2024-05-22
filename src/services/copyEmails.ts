import { toast } from "react-toastify";

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text successfully copied to clipboard');
    } catch (err) {
        console.error('Could not copy text: ', err);
    }
}

export const handleCopy = (text: string) => {
    copyToClipboard(text);
    toast.promise(
        copyToClipboard(text),
        {
            pending: 'Processing...',
            success: 'Copied!',
            error: 'Operation failed!'
        }
    );
};