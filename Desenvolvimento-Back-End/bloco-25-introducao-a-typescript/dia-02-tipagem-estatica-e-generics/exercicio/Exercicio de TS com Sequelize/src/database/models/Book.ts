import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import Author from './Author';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare author_id: number;
  declare genre_id: number;
}

Book.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  author_id: {
    type: INTEGER,
    allowNull: false,
  },
  genre_id: {
    type: INTEGER,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'books',
  underscored: true,
  timestamps: false,
})

Book.belongsTo(Author, { foreignKey: 'id' });
Author.hasMany(Book, { foreignKey: 'authorId' });


export default Book;