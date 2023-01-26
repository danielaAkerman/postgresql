import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "postgres://ttvstpna:Js9NiIcRNAwTfWFraIdogwCKY2PonsrO@motty.db.elephantsql.com/ttvstpna"
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  class User extends Model {}
  User.init(
    {
      username: { type: DataTypes.STRING, allowNull: false },
      birthday: { type: DataTypes.DATEONLY },
    },
    { sequelize, modelName: "User" }
  );

  await sequelize.sync({
    alter: true,
  });

  //   const dani = await User.create({
  //     username: "Daniela",
  //     birthday: "1991-03-14",
  //   });

  //   console.log("User creada", dani.toJSON());

  const usersCreados = await User.findAll();

  //   console.log(usersCreados);

  for (const u of usersCreados) {
    console.log(u.dataValues);
  }

  //   for (const u of usersCreados) {
  //     console.log(u.toJSON());
  //   }

  //   console.log({
  //     usersCreados: usersCreados.map((i) => {
  //       i.dataValues;
  //     }),
  //   });
  
})();
