import { db } from "../connect.js";

export const getCars = (req, res) => {
    const { make, year, transmission } = req.query;
    let q = "SELECT * FROM cars WHERE 1=1"; // Ensure the initial condition is always true

    if (make) {
        q += ` AND make = ${db.escape(make)}`;
    }
    if (year) {
        q += ` AND year = ${db.escape(year)}`;
    }
    if (transmission) {
        q += ` AND transmission = ${db.escape(transmission)}`;
    }

    db.query(q, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
};

export default getCars;

export const getCarById = (req, res) => {
    const { id } = req.params;
    const q = `SELECT * FROM cars WHERE id = ${db.escape(id)}`;

    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }
        if (data.length === 0) {
            return res.status(404).json({ message: "Car not found" });
        }

        return res.status(200).json(data[0]);
    });
};
