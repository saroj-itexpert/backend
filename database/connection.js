// hami yaha database connection ko code/logic lekhxam
const {Sequelize, DataTypes} = require("sequelize")

const sequelize = new Sequelize("postgresql://postgres.andhicxkpvuuhlabgbsw:mynameismaharjan@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
                                {
                                    define:{
                                        freezeTableName: true,
                                    },
                                });

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated! ");
})
.catch((err)=>{
    console.log(err);
})

const db = {}
db.Sequelize = Sequelize
db.books = require("./models/book.model")(sequelize, DataTypes)
db.users = require("./models/user.model")(sequelize,DataTypes)

//migrate code ho yo chai hai 
sequelize.sync({force:false, alter: true}).then(
    ()=>{
        console.log("Database migrated successfully!");
    }
)


module.exports = db;
