import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { addUser, updateUser } from "../services/userService";
import type { User } from "../models/User";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Grid } from "@mui/material";
import { toast } from "react-toastify";

interface Props {
    user: User | null;
    type: 'add' | 'edit';
    onClose: (res: any) => void;
}

type UserFormData = Omit<User, "id">;

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.object().shape({
        city: Yup.string(),
        street: Yup.string(),
        zipcode: Yup.string().min(6, "Zipcode must be atleast 6 characters"),
    }),
});

export default function AddUser({ type, user, onClose }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserFormData>({
        resolver: yupResolver(schema),
        defaultValues: user || { name: "", email: "", address: { city: "", street: "", zipcode: "" } }
    });

    const onSubmit: SubmitHandler<UserFormData> = async (data) => {
        try {
            let res;
            if (type === "add") {
                res = await addUser(data);
                toast.success("Added User Successfully");
            } else if (type === "edit" && user?.id) {
                res = await updateUser(user.id, data);
                toast.success("Updated User Successfully");
            }
            onClose(res);
        } catch (err) {
            toast.error("Server Error");
        }
    };

    return (
        <Dialog open onClose={() => onClose(null)}>
            <DialogTitle>{type === 'add' ? 'Add User' : 'Edit User'}</DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <TextField fullWidth label="Name" error={!!errors.name} {...register("name")} helperText={errors.name?.message} />
                        </Grid>

                        <Grid size={6}>
                            <TextField fullWidth label="Email" error={!!errors.email} {...register("email")} helperText={errors.email?.message} />
                        </Grid>

                        <Grid size={6}>
                            <TextField fullWidth label="City" error={!!errors.address?.city} {...register("address.city")} helperText={errors.address?.city?.message} />
                        </Grid>

                        <Grid size={6}>
                            <TextField fullWidth label="Street" error={!!errors.address?.street} {...register("address.street")} helperText={errors.address?.street?.message} />
                        </Grid>

                        <Grid size={6}>
                            <TextField fullWidth label="ZipCode" error={!!errors.address?.zipcode} {...register("address.zipcode")} helperText={errors.address?.zipcode?.message} />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => onClose(null)} color="secondary">Close</Button>
                    <Button type="submit" color="primary" variant="contained">{type === 'edit' ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}