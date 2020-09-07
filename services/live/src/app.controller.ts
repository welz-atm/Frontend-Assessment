import { Controller,Get, Post, Put, Body, Delete, Request, UseGuards } from '@nestjs/common';
import { NoteService } from './notes.service';
import { UserService } from './users.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { Note, User, } from "@prisma/client";



@Controller()
export class AppController {
	constructor(
    private readonly noteService: NoteService,
    private readonly userService: UserService,
    ) {}


  @UseGuards(LocalAuthGuard)
  @Post('users/create')
  async createUser(params: { username: string, password: string} ): Promise <any> {
    const { username, password } = params;
    const new_user = this.userService.createUser(username, password);
    return new_user;    
  }

  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }


	@Post('notes/create')
  async createNote(data: { title: string, description: string, user: number } ): Promise <any> {
    const { title, description, user } = data;
    const note = this.noteService.createNote({ title, description, user });
    return note;
  }


  @Get('notes')
  async getNotes(): Promise <any> {
    const allNotes = this.noteService.getNotes();
    return allNotes;
  }


  @Get('/users/:username/notes')
  async getUserNote(params: { id : Number }): Promise <Note[]> {
    const users_note = this.noteService.getUserNote({ where: { id: params }, });
    return users_note;
  }


  @Put('notes/:id')
  async updateNote(params: { title: string; description: string; user: number}): Promise <any> {
    const { title, description, user } = params;
    const update = this.noteService.updateNote({ title, description, user });
    return update;    
  }


  @Delete('notes/:id')
  async deleteNote(params: { id : Number }): Promise <any> {
    const del = this.noteService.deleteNote({ params });
    return del;    
  }
}