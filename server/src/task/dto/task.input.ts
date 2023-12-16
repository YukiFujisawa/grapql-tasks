// Task model for GraphQL

import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  dueDate: string;

  @Field({ nullable: true })
  description: string;
}
