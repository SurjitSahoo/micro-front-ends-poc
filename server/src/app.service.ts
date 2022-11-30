import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuid4 } from 'uuid';

export interface Item {
  id: string;
  name: string;
  isFavorite: boolean;
}

@Injectable()
export class AppService {
  private items: Item[] = [
    { id: uuid4(), name: 'default item', isFavorite: false },
  ];
  getAll() {
    return this.items;
  }

  getOne(id: string) {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return item;
  }

  create(item: Omit<Item, 'id'>): Item {
    const itemWithId = { id: uuid4(), ...item };
    this.items.push(itemWithId);
    return itemWithId;
  }

  update(id: string, updates: Partial<Item>) {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    if (updates.name) item.name = updates.name;
    if (
      updates.isFavorite !== undefined &&
      updates.isFavorite !== item.isFavorite
    )
      item.isFavorite = updates.isFavorite;

    return item;
  }
}
