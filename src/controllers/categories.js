import connect from '../helpers/connect';

class CategoriesController {
    static async getAllCategories(req, res) {
        const query = 'select * from categories';
        try {
            const { rows } = await connect.query(query);
            return res.status(200).send(rows);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    }

    static async CreateCategory(req, res) {
        let query = 'insert into categories (name, logo_link) values ($1 , $2)';
        let name = req.body.name;
        let logoLink = req.body.logoLink;
        let values = [name, logoLink];

        try {
            const { rows, rowCount } = await connect.query(query, values);
            return res.status(200).send({ rows, rowCount });
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    static async DeleteCategory(req, res) {
        let query = 'delete from categories where id=$1';
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

export default CategoriesController;
