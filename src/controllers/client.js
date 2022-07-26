import moment from 'moment';
import { clientModel } from "../models/client.js";

class ClientController {
    addclient = async (req, res) => {
        try {
            if (!req.headers.token) {
                res.json({
                    code: 400,
                    error: 'Access identifier not found'
                });
            }
            let client = new clientModel._model({
                ...req.body,
                addedAt: moment.now(),
            });
            await client.save((err, client) => {
                if (err) {
                    res.json({
                        code: 400,
                        error: 'Unable to add client'
                    });
                }
                return res.json({
                    code: 200,
                    message: 'client Added Succesfully',
                    client
                });
            });
        } catch (error) {
            throw error;
        }
    };


    getAllClients = async (req, res) => {
        try {
            if (!req.headers.token) {
                res.json({
                    code: 400,
                    error: 'Access identifier not found'
                });
            }
            let allclients = await clientModel._model.find().lean().exec((err, clients) => {
                console.log("🚀 ~ file: client.js ~ line 45 ~ ClientController ~ allclients ~ err", err);
                if (err) {
                    res.json({
                        code: 400,
                        error: 'Unable to fetch clients'
                    });
                }
                return res.json({
                    code: 200,
                    message: 'clients fetched Succesfully',
                    clients
                });
            });
        } catch (error) {
            throw error;
        }
    };
}
export let clientController = new ClientController();
