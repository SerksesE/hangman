import { JsonController, Post, HttpCode, Body, Get } from 'routing-controllers'
// import User from '../users/entity';
import GameSession from './entity';

@JsonController()
export default class SessionController {

  @Get('/sessions')
  async allSessions() {
    const sessions = await GameSession.find()
    return { sessions }
  }
  @Post('/sessions')
  @HttpCode(201)
  async createSession(
    @Body() session: GameSession
  ) {
    return session.save()
  }

  // @Patch('/sessions/:id')
  // async updateSession(
  //   @CurrentUser() user: User
  //   @Param('id') gameId: number
    // @Body() update: GameUpdate should have some logic
  // )

}