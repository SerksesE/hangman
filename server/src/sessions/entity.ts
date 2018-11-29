import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
// import User from '../users/entity'

@Entity()
export default class GameSession extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('integer', {nullable: true})
  player1: number

  @Column('integer', {nullable: true})
  player2: number

  @Column('integer', {nullable: true})
  game1: number

  @Column('integer', {nullable: true})
  game2: number

  @Column('integer', {nullable: true})
  winner: string
}

