import mongoose from "mongoose";
const { Schema, model } = mongoose;

class Client {
    _model;
    ClientSchema;
    constructor() {
        this.intiliseScehma();
        this._model = model('client', this.ClientSchema);
    }
    intiliseScehma() {
        this.ClientSchema = new Schema({
            represents_company: {
                type: String,
            },
            customer_name: {
                type: String
            },
            email: {
                type: String,
            },
            gender: {
                type: String
            },
            address: {
                type: String
            },
            mobile_no: {
                type: Number
            },
            bank: {
                type: String
            },
            customer_type: {
                type: String
            },
            territory: {
                type: String
            }
        }, { strict: false });
    }
}
export let clientModel = new Client();