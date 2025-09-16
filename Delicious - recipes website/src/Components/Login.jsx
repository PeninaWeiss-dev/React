import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { createUser } from "../Store/UserSlice";
import useTitle from "../Hooks/useTitle";

export default function Login() {
  useTitle({pageTitle:"Log in"})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {console.log(data)
    dispatch(createUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          padding: 4,
          backgroundColor:"white", 
          borderRadius: 1,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: 400,
          margin: "0 auto",
          mt: "6%",
                }}
      >
        <h2 style={{ textAlign: "center", color: "#436448" }}>Login Form</h2>
        <Stack spacing={3}>
          <TextField className="my-input"
            label="Full Name"
            variant="outlined"
            fullWidth
            error={!!errors.fullName}
            helperText={
              errors.fullName?.type === "required"
                ? "Full name is required"
                : errors.fullName?.type === "pattern"
                ? "Full name must include at least two words"
                : ""
            }
            inputProps={{
              ...register("fullName", {
                required: true,
                pattern: /^[a-zA-Z]+\s[a-zA-Z]+$/,
              }),
            }}
          />
          <TextField  className="my-input"
            label="Email"
            variant="outlined"
            fullWidth
            error={!!errors.Email}
            helperText={
              errors.Email?.type === "required"
                ? "Email is required"
                : errors.Email?.type === "pattern"
                ? "Enter a valid email address"
                : ""
            }
            inputProps={{
              ...register("Email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              }),
            }}
          />
          <Button  className="my-btn"
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            sx={{width:150, alignSelf: 'center'}}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </form>
  );
}
