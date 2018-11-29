import { JsonController, Post, HttpCode, Body, Get, Patch, Param, NotFoundError } from 'routing-controllers'
// import User from '../users/entity';
import GameSession from './entity';
import Game from '../games/entity';
// import Game from '../games/entity';

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

  @Patch('/sessions/:id/join')
  async userJoin(
    @Body()
    playerId: any,
    // user: User,
    // session: GameSession,
    // game: Game,
    @Param('id') sessionId: number
  ) {

    let player = parseInt(playerId.playerId)

    console.log(player)

    const gameSession = await GameSession.findOne(sessionId)
    if (!gameSession) throw new NotFoundError('Session does not exist')



    // get session id
    // get user id from the body

    // does session have a player 1? if no userid = player1
    // return response waiting for players


    if (gameSession.player1 === null) {
      gameSession.player1 = player
      return gameSession.save()
    } else if (gameSession.player1 !== null) {
      gameSession.player2 = player
    }

    const game1 = await Game.create({
      userId: gameSession.player1
    }).save()

    const game2 = await Game.create({
      userId: gameSession.player2
    }).save()

    if (game1.id === undefined) throw Error
    gameSession.game1 = game1.id

    if (game2.id === undefined) throw Error
    gameSession.game2 = game2.id

    // if yes userid = player2
    // make 2 games 

    // if (session.player1 && session.player2 !== null) {

    // }
    // return game.save()

    // game 1 belongs to player1
    // game1.userid = session.player1



    // game 2 belongs to player2
    // game2.userid = session.player2

    // return a response with start with oppenents game id and your own

    console.log(gameSession)
    return gameSession.save()
  }
}