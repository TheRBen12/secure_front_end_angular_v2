import {DataStore, LOAD} from './DataStore';
import {Graph} from '../../models/graph';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {urls} from '../urls/urls';
import {tap} from 'rxjs/operators';


@Injectable()
export class GraphService {
  public graphs: Observable<Graph[]>;

  constructor(private dataStore: DataStore<Graph>, private http: HttpClient) {
    this.graphs = dataStore.items$;
  }

  public findAllGraphs(): Observable<Graph[]> {
    return this.http.get<Graph[]>(urls.allGraphs).pipe(tap((graphs) => {
      this.dataStore.dispatch({type: LOAD, data: graphs});
      this.graphs = this.dataStore.items$;
    }));
  }
}
