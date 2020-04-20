import connect from '../helpers/connect';

class PromotionsController {
    static async getAllPromotions(req, res) {
        const query = 'select * from promotions';
        try {
            const { rows } = await connect.query(query);
            return res.status(200).send(rows);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    }

    static async CreatePromotion(req, res) {
        let query =
            'insert into promotions (name, picture_link) values ($1 , $2)';
        let name = req.body.name;
        let pictureLink = req.body.pictureLink;
        let values = [name, pictureLink];

        try {
            const { rows, rowCount } = await connect.query(query, values);
            return res.status(200).send({ rows, rowCount });
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    static async DeletePromotion(req, res) {
        let query = 'delete from promotions where id=$1';
        let data = req.params.id;
        let values = [data];

        try {
            const { rows, rowCount } = await connect.query(query, values);
            return res.status(200).send({ rows, rowCount });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}

export default PromotionsController;
