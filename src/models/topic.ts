import mongoose, {Schema} from 'mongoose'

const topicSchema=new Schema(
    {
    title:String,
    description:String,
    },
    {
        timestamps:true,
    }
)

const Topic = mongoose.models.topic||mongoose.model('topic',topicSchema)

export default Topic

