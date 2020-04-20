import { Router } from 'express';
import CategoriesController from '../controllers/categories';
import PromotionsController from '../controllers/promotions';

const app = Router();

app.get('/', (req, res) => {
    return res.status(200).send({
        message: 'YAY! Congratulations! Your first endpoint is working',
    });
});

app.get('/categories', CategoriesController.getAllCategories);
app.delete('/deletecategories/:id', CategoriesController.DeleteCategory);
app.post('/createcategory', CategoriesController.CreateCategory);
app.get('/promotions', PromotionsController.getAllPromotions);
app.delete('/deletepromotion/:id', PromotionsController.DeletePromotion);
app.post('/createpromotion', PromotionsController.CreatePromotion);
app.delete('*', (req, res) => {
    return res.status(404).send({
        message: 'This Directory does not exist',
    });
});

export default app;
