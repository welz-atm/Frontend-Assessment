import { Injectable,HttpException } from '@nestjs/common';
import { notesDemo } from './notes.demo';
import { PrismaClient, Note, User } from "@prisma/client";

@Injectable()
export class NoteService {
	constructor(private readonly prisma: PrismaClient) {}
	

	async createNote(params: { title: string, description: string, user: number } ): Promise <any> {
		const { title, description, user } = params;
		const newNote = await this.prisma.note.create({ title, description, user });
		return newNote;
	}


	async getNotes(): Promise <Note[]> {
		const allNotes = await this.prisma.note.findMany();
		return allNotes;
	}


	async getUserNote(userID): Promise <Note[]> {
		const get_notes = await this.prisma.note.findMany({ where: {id : userID } });
		return get_notes;
	}


	async updateNote(params: { title: string, description: string, user: number}): Promise <Note> {
		const { title, description, user } = params;
		const updated_note = await this.prisma.note.update({ title, description, user });
		return updated_note;
	}


	async deleteNote(id): Promise <any> {
		const deleted = await this.prisma.note.delete(id);		
		return deleted;
	}


}