import { JsonController, Get, Post, HttpCode, Body } from 'routing-controllers'
import Game from './entity';

@JsonController()
export default class GameController {
  @Get('/games')
  async allGames() {
    const words = await Game.find()
    return { words }
  }

  @Post('/games')
  @HttpCode(201)
  createGame(
    @Body() game: Game
  ) {
    return game.save()
  }

}