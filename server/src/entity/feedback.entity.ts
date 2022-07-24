import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column('text', { default: '' })
    comment: string;

    // @Column()
    // created?: string;

    // @Column()
    // updated?: string;
}