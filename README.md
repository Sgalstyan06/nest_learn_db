<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

for use Response, Request type install @types/express package

to format use command
npx prettier --write ., or npm run format
this is controller example

// this use for rediraction
  // @Get('redirect')
  // @Redirect('https://nestjs.com', 301)
  // // this is use without destractoring
  // @Get('admin/:id')
  // findUserByID(@Param('id', ParseIntPipe) id: number): string {
  //   return `this is admin by specified ${id}`;
  // }
  // // this is use with destractoring
  // @Get(':id')
  // findOneUser(@Param('id', ParseIntPipe) id: number): UserDto | string {
  //   // return `this is user with id ${id}`;
  //   // const user = users.find((item) => item.id === id);
  //   // return user;
  //   return this.usersService.findOne(id);
  // }
  // @Post()
  // createUser(@Body() userDto: UserDto): UserDto {
  //   // console.log(userDto);
  //   // users.push(userDto);
  //   // return userDto;
  //   return this.usersService.create(userDto);
  // }
  // @Put(':id')
  // updateUser(@Param('id', ParseIntPipe) id: number, @Body() userDto: UserDto) {
  //   // console.log('id', typeof id);
  //   // const userUpdatedIndex = users.findIndex((item) => item.id === id);
  //   // if (userUpdatedIndex !== -1) {
  //   //   users[userUpdatedIndex] = userDto;
  //   // } else {
  //   //   throw new NotFoundException(`User with ID ${id} not found`);
  //   // }
  //   // console.log(users);
  //   // return userDto;
  //   return this.usersService.update(id, userDto);
  // }
  // @Delete(':id')
  // deleteUser(@Param('id', ParseIntPipe) id: number): string {
  //   // const deletedUserIndex = users.findIndex((item) => item.id === id);
  //   // if (deletedUserIndex !== -1) {
  //   //   users.splice(deletedUserIndex, 1);
  //   //   return `You successfully delete user with ${id}`;
  //   // } else {
  //   //   throw new NotFoundException(` user with ${id} not found`);
  //   // }

  //   return this.usersService.delete(id);
  // }

