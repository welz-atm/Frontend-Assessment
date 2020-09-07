import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { usersDemo } from './users.demo'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaClient) {}


	async createUser(username: string, password: string): Promise <any> {
		const adjust_username = username.toLowerCase();
		const adjust_password = await bcrypt.hash(password, 10);
		const new_user = await this.prisma.user.create({ data: { username: adjust_username, password: adjust_password }});
		return usersDemo;
	}


	async validateUser(username: string, password: string): Promise <User> {
		const users = await this.prisma.user.findOne(username);
			if( users && users.password === password ){
			const { password, ...result } = users;
			return result;
			}

			return null
	} 

}