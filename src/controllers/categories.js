class CategoriesController {
    static async getAllCategories(req, res) {
        return res.status(200).send({
            message: 'Get all categories endpoint working',
        });
    }

    static async CreateCategory(req, res) {
        return res.status(200).send({
            message: 'Create Category endpoint working',
        });
    }

    static async DeleteCategory(req, res) {
        return res.status(200).send({
            message: 'Delete Category endpoint working',
        });
    }
}

export default CategoriesController;
