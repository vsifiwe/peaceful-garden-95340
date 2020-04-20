class PromotionsController {
    static async getAllPromotions(req, res) {
        return res.status(200).send({
            message: 'Get all promotions endpoint working',
        });
    }

    static async CreatePromotion(req, res) {
        return res.status(200).send({
            message: 'Create promotion endpoint working',
        });
    }

    static async DeletePromotion(req, res) {
        return res.status(200).send({
            message: 'Delete promotion endpoint working',
        });
    }
}

export default PromotionsController;
