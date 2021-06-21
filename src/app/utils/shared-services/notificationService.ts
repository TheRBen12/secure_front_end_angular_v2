import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class NotificationService{
  constructor(private toastrService: ToastrService) {
  }

  public error(message: string): void{
    this.toastrService.error(message);
  }
  public success(message: string): void{
    this.toastrService.success(message);
  }

}
