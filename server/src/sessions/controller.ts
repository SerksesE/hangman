import { JsonController, Post, HttpCode, Body, Get, Param } from 'routing-controllers'
// import User from '../users/entity';
import GameSession from './entity';

@JsonController()
export default class SessionController {

  @Get('/sessions')
  async allSessions() {
    const sessions = await GameSession.find()
    return sessions
  }

  @Get('/sessions/:id')
  async getSession(
    @Param('id') id: number
  ) {
    const session = await GameSession.findOne(id)
    return session
  }

  @Post('/sessions')
  @HttpCode(201)
  async createSession(
    @Body() session: GameSession
  ) {
    return session.save()
  }

  // @Patch('/sessions/:id/join')
  // async userJoin(
  //   @Body()
  //   user: User,
  //   session: GameSession,
  //   @Param('id') sessionId: number
  // ) {

  // get session id
  // get user id from the body

  // const gameId = session.id
  // const userId = user.id

  // does session have a player 1? if no userid = player1
  // return response waiting for players

  // if (session.player1 !== null) {
  //   return session.player2 === userId
  // }
  // return session.player1 === userId

  // if yes userid = player2
  // make 2 games 



  // game 1 belongs to player1
  // game1.userid = session.player1

  // game 2 belongs to player2
  // game2.userid = session.player2

  // return a response with start with oppenents game id and your own 

  // }
}