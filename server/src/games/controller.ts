import { JsonController, Get, Post, HttpCode, Body } from 'routing-controllers'
import Game from './entity';

@JsonController()
export default class GameController {

    /* @Get('/games')
        async allGames(){
            const games = await Game.find()
            return   { games }
        } */
    
        @Get('/games')
        getGames() {
          return Game.find()
        }
    
    @Post('/games')
        @HttpCode(201)
        createGame(
            @Body() game: Game
        ) {
            return game.save ()
        }
        
}