import {Observable} from 'rxjs';

import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

export const LOAD = 'LOAD';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';

@Injectable({
  providedIn: 'root'
})
export class DataStore<T> {
  savedItems: T[];
  items$ = new BehaviorSubject<T[]>([]);

  public dispatch(action): void {
    this.savedItems = this._reduce(this.savedItems, action);
    this.items$.next(this.savedItems);
  }

  _reduce(items, action): T[] {
    switch (action.type) {
      case LOAD:
        return [...action.data];
      case ADD:
        return [...items, action.data];
      case EDIT:
        return items.map(item => {
          const editedItem = action.data;
          if (item.uuid !== editedItem.uuid) {
            return item;
          }
          return editedItem;
        });
      case REMOVE:
        return items.filter(view => view.uuid !== action.data.uuid);
      default:
        return items;
    }
  }
}
