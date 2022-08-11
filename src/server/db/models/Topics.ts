import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  DataType,
  AllowNull,
  Default,
} from 'sequelize-typescript';

  type TopicsAttributes = {
    id: number;
    title: string;
    userId: number;
  }
  type TopicsCreationAttributes = Omit<TopicsAttributes, 'id'>;

  @Table({
    timestamps: false,
    paranoid: true,
    tableName: 'Topics'
  })
export class Topics extends Model<TopicsAttributes, TopicsCreationAttributes> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
      id: number;

    @Default('light')
    @AllowNull(false)
    @Column(DataType.STRING)
      title: string;

    @AllowNull(false)
    @Column(DataType.INTEGER )
      userId: number;
}
