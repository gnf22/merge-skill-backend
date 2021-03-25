import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { User } from '../../users/entities/User';

export enum SchoolingRole {
  FUNDAMENTAL = 'Fundamental',
  MEDIO = 'Médio',
  SUPERIOR = 'Superior',
  OUTRO = 'Outro',
}

@Entity('applicants')
export class Applicant {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  biography: string;

  @Column()
  telephone: string;

  @Column()
  dateOfBirth: Date;

  @Column({
    type: 'enum',
    enum: SchoolingRole,
    default: SchoolingRole.OUTRO,
  })
  schooling: SchoolingRole;

  @Column()
  isWorking: boolean;

  @Column()
  user_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
