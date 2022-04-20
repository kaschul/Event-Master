import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import Products from './models/productModel.js'
import Users from './models/userModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Products.deleteMany()
        await Users.deleteMany()

        const createdUsers = await Users.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((p) => {
            return {...p, user: adminUser}
        })

        await Products.insertMany(sampleProducts)
        console.log('Your data has been successfully imported! Good for you!')
        process.exit()

    }  catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await Products.deleteMany()
        await Users.deleteMany()
    
        console.log('Your data has been disintegrated!')
        process.exit()
    
    } catch (error) {
    console.error(`${error}`)
    process.exit(1)
    }
}

if (process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}