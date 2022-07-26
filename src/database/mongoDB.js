import mongoose from 'mongoose';

class mongoDB {

    constructor() {
    }
    async mongoConnect() {
        let mongo_string = 'mongodb+srv://Rupesh45:Rupesh%4045@cluster0.gfbnu.mongodb.net/test?retryWrites=true&w=majority';
        try {
            await mongoose.connect(mongo_string);
            console.log('MongoDB connected successfully');
        } catch (error) {
            throw error;
        }
    }
}
export let mongo = new mongoDB();