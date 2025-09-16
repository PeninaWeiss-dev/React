import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Button, Typography, MenuItem, Grid, Paper, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { addRecipe } from '../Store/RecipesSlice';
import useTitle from '../Hooks/useTitle';
import Swal from 'sweetalert2';


const AddRecipe = () => {
    useTitle({pageTitle:"Add Recipe"})
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const [categoryId, setCategoryId] = useState(0);
    const recipesByCategory = useSelector(state => state.recipes.recipesByCategory);
    const [categories, setCategories] = useState([]);
    const user = useSelector(state => state.user.name);
    const [ingredient, setIngredient] = useState('');
    const [quantity, setQuantity] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [image, setImage] = useState(null); 

    useEffect(() => {
        setCategories(recipesByCategory.map(category => ({
            categoryName: category.categoryName,
            categoryId: category.categoryId,
        })));
    }, [recipesByCategory]);

    const kosherOptions = ['Dairy', 'Pareve', 'Poultry'];

    const handleAddIngredient = () => {
        if (ingredient && quantity) {
            setIngredients([...ingredients, { ingredient, quantity }]);
            setIngredient('');
            setQuantity('');
        }
    };

    const handleImageUpload = (e) => { // פונקציה להעלאת התמונה
        const file = e.target.files[0];
        if (file) {
            const imageUrl=URL.createObjectURL(file)
            setImage(imageUrl); // שמור את הקובץ ב-state
        }
    };

    const handleCategoryChange = (event) => {
        setCategoryId(categories.find(category => category.categoryName === event.target.value).categoryId);
    };


    const onSubmit = (data) => {
        const recipeData = {
            ...data,
            preparationTime:data.preparationTime+" minutes",
            ingredients,
            instructions: data.instructions.split('\n'),
            user,
            image
        };
        dispatch(addRecipe({ categoryId: categoryId, recipe: recipeData }));
        Swal.fire({
            title: "Recipe added successfully",
            icon: "success",
            draggable: true,
            confirmButtonColor: "#F5C71A"
        });
        reset();
        setIngredients([]); 
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: '0 auto', mt: 4 }}>
                <h1 style={{ textAlign: "center", color: "#436448" }}>Add New Recipe</h1>
                <Stack spacing={2} alignItems={"center"}>
                    <TextField className="my-input" label="Name"
                        fullWidth
                        name="name"
                        error={!!errors.name}
                        helperText={errors.name?.type === "required" ? "Name is required" : ""}
                        inputProps={{
                            ...register("name", { required: true }),
                        }} />
                    <TextField className='my-input' label="Category Name"
                        fullWidth
                        select
                        name="categoryName"
                        error={!!errors.categoryName}
                        helperText={errors.categoryName?.type === "required" ? "Category name is required" : ""}
                        inputProps={{
                            ...register("categoryName", { required: true }),
                        }}
                        onChange={handleCategoryChange}
                         >
                        {categories.map((category, index) => (
                            <MenuItem key={index} value={category.categoryName}>
                                {category.categoryName}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField className='my-input' label="Preparation Time (in minutes)"
                        fullWidth
                        name="preparationTime"
                        type="number"
                        error={!!errors.preparationTime}
                        helperText={errors.preparationTime?.type === "required" ? "Preparation time is required" : ""}
                        inputProps={{
                            ...register("preparationTime", { required: true }),
                        }} />
                    <TextField className='my-input' label="Kosher"
                        fullWidth
                        select
                        name="kosher"
                        error={!!errors.kosher}
                        helperText={errors.kosher?.type === "required" ? "Kosher is required" : ""}
                        inputProps={{
                            ...register("kosher", { required: true }),
                        }}
                    >
                        {kosherOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                        Ingredients
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField className='my-input'
                                fullWidth
                                label="Ingredient"
                                value={ingredient}
                                onChange={(e) => setIngredient(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className='my-input'
                                fullWidth
                                label="Quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Fab size="small" aria-label="add" onClick={handleAddIngredient}
                        style={{ border: "1px solid #F5C71A" }}
                    >
                        <AddIcon />
                    </Fab>
                    <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                        {ingredients.map((item, index) => (
                            <li key={index}>
                                {item.quantity} {item.ingredient}
                            </li>
                        ))}
                    </ul>

                    <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                        Instructions
                    </Typography>
                    <TextField className="my-input" label="Instructions"
                        fullWidth
                        multiline
                        rows={4}
                        name="instructions"
                        error={!!errors.instructions}
                        helperText={errors.instructions?.type === "required" ? "Instructions are required" : ""}
                        inputProps={{
                            ...register("instructions", { required: true }),
                        }} />

                    <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                        Upload Image
                    </Typography>
                    

                    <input
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageUpload}
                    />
                    {errors.image && <span style={{ color: 'red' }}>Image is required</span>}

                    <Button variant="contained" type='submit' endIcon={<SendIcon />} className="my-btn"
                        style={{ width: '50%' }}>
                        Send
                    </Button>
                </Stack>
            </Paper>
        </form>
    );
};

export default AddRecipe;
