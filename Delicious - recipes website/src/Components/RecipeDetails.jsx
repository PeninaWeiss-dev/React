import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, Button } from "@mui/material";
import { styled } from '@mui/system';
import useTitle from "../Hooks/useTitle";

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
    boxShadow: 5,
    minHeight: '350px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    color: '#333',
    borderRadius: theme.spacing(1),
}));

const StyledList = styled('ul')(({ theme }) => ({
    listStyleType: 'disc',
    paddingLeft: theme.spacing(4),
    margin: theme.spacing(1, 0),
    textAlign: 'left',
    color: '#555',
}));

const RecipeDetails = () => {
    const { categoryId } = useParams();
    const { recipeId } = useParams();
    const categoryIndex = useSelector(state => state.recipes.recipesByCategory.findIndex(category => category.categoryId == categoryId));
    const categoryName = useSelector((state) => state.recipes.recipesByCategory[categoryIndex].categoryName);
    const recipes = useSelector((state) => state.recipes.recipesByCategory[categoryIndex].recipes);
    const [recipe, setRecipe] = useState({});

    useTitle({ pageTitle: recipe.name })
    useEffect(() => {
        const foundRecipe = recipes.find((recipe) => recipe.recipeId == recipeId);
        setRecipe(foundRecipe);
    }, []);

    return (
        <Box sx={{ padding: '5%' }}>
            <StyledCard>
                <Box sx={{ flex: 1, paddingRight: 2, maxWidth: '40%' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#436448', textAlign: 'left' }}>
                        {recipe.name}
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: 2, color: '#555', textAlign: 'left' }}>
                        {categoryName}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
                        <strong>Preparation Time:</strong> {recipe.preparationTime}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 3, textAlign: 'left' }}>
                        <strong>Kosher:</strong> {recipe.kosher}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left' }}>
                        <strong>Ingredients:</strong>
                    </Typography>
                    <StyledList>
                        {recipe.ingredients?.map((item, index) => (
                            <li key={index}>
                                <Typography variant="body2">
                                    {`${item.quantity} ${item.ingredient}`}
                                </Typography>
                            </li>
                        ))}
                    </StyledList>
                    <br></br>
                    <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left' }}>
                        <strong>Instructions:</strong>
                    </Typography>
                    <StyledList>
                        {recipe.instructions?.map((item, index) => (
                            <li key={index}>
                                <Typography variant="body2">
                                    {` ${item}`}
                                </Typography>
                            </li>
                        ))}
                    </StyledList>
                </Box>

                <CardMedia
                    component="img"
                    image={`${recipe.image}`}
                    alt={recipe.name}
                    sx={{
                        width: '60%',
                        height: 'auto',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        borderRadius: 2,
                        border: `2px solid #ddd`,
                    }}
                />
            </StyledCard>
        </Box>
    );
};

export default RecipeDetails;
