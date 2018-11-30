import { JsonController, Post, HttpCode, Body, Get, Patch, Param, NotFoundError } from 'routing-controllers'
import GameSession from './entity';
import Game from '../games/entity';

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
    @Param('id') sessionId: number
  ) {
    let player = parseInt(playerId.playerId)

    const gameSession = await GameSession.findOne(sessionId)
    if (!gameSession) throw new NotFoundError('Session does not exist')

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

    return gameSession.save()
  }

  // @Patch('/sessions/:sessionId/games/:id')
  // async addWord(
  //   @Body()
  //   word: string,
  //   @Param()
  // )


}

