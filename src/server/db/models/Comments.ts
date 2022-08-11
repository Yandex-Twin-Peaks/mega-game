
import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  DataType,
  AllowNull,
} from 'sequelize-typescript';

    type CommentsAttributes = {
      id: number;
      text: string;
      topicId: number;
      userId: number;
    }
    type CommentsCreationAttributes = Omit<CommentsAttributes, 'id'>;

    @Table({
      timestamps: false,
      paranoid: true,
      tableName: 'Comments'
    })
export class Comments extends Model<CommentsAttributes, CommentsCreationAttributes> {
      @AutoIncrement
      @PrimaryKey
      @Column(DataType.INTEGER)
        id: number;

      @AllowNull(false)
      @Column(DataType.STRING)
        text: string;

      @AllowNull(false)
      @Column(DataType.INTEGER )
        topicId: number;

      @AllowNull(false)
      @Column(DataType.INTEGER )
        userId: number;
}
