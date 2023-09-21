import Swal from 'sweetalert2'

export const useSweetAlert = () => {
    const showAlert = async (
        title = "Are you sure?",
        text = "You can't be able to revert this!",
        icon = "warning",
        confirmButtonText = "Yes, do it!"
    ) => {
        const result = await Swal.fire({
            title,
            text,
            icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText,
        });

        if (result.isConfirmed) {
            return true;
        } else {
            return false;
        }
    };

    return {
        showAlert,
    };
};
