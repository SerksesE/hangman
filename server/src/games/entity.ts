import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  word: string

  @Column('text', {nullable:true})
  userId: number

  @Column('text', {nullable:true})
  guesses: [string]

  @Column('text', {default: null})
  winner: string

  
}
