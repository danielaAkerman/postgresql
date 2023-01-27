import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from "./db";
import { User } from "./db/user";
import { Product } from "./db/product";

// LAS BASES DE DATOS RELACIONALES APORTAN ESTRUCTURA Y COMPLEJIDAD
// OFRECEN OPORTUNIDADES PARA ESCALAR
// COLLECTIONS Y DOCS EN NOSQL
// SON TABLAS Y REGISTROS EN SQL

// USAMOS UNA DB PostGres PERO ALOJADA EN LA NUBE. (as a Service)

// Las librerías ORM nos ayudan a interactuar con las SQL sin conocer el lenguaje
// ORM: Object Relational Mapping (mapeo objeto-relacional)
// Parsean los valores q recibimos desde DB y lo utilizamos como un objeto
// Tamb parsea nuestros objetos y crea las queries necesarias para interactuar con la DB
// Luego de crear o modificar tablas, se lo tenemos que indicar a Sequalize.
// La opción alter es la que vamos a usar de ahora en más
// para modificar tablas sin empezar de cero,
// a diferencia de la opción force que elimina todo y lo vuelve a crear.
// La opción alter le indica a Sequalize que modifique lo menos posible.

async function main() {
  // const resp = await sequelize.sync({ alter: true });
  // console.log(resp)

  // const productNew = await Product.create({
  //   title: "Parlante",
  //   price: 2800,
  // });

  const todos = await Product.findAll();
  console.log({"PRODUCTOS:": todos.map((i) => i.dataValues)});

  // console.log("EL PRODUCTO:", productNew);

  // const todos = await User.findAll();
  // console.log({"REGISTROS": todos.map((i) => i.dataValues.otrocampo)});

  // const danie = await User.findByPk(2);
  // console.log(danie.dataValues.username)

  // const dani2 = await User.findAll({
  //   where: {
  //     otrocampo: "Hola",
  //   },
  // });

  // console.log(dani2.map((i) => i.dataValues));
}
main();

// const usersCreados = await User.findAll();

// for (const u of usersCreados) {
//   console.log(u.dataValues);
// }

//   for (const u of usersCreados) {
//     console.log(u.toJSON());
//   }

// console.log({ "Users Creados": usersCreados.map((i) => i.dataValues) });
