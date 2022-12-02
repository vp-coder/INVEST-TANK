import mongoose from 'mongoose';
import Mongoose from 'mongoose'
const { connect } = Mongoose;

const url='mongodb://localhost:27017/xharktank';
 mongoose.connect(url,{
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
})