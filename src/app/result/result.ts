import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDataService } from '../user-data';

@Component({
  selector: 'app-result',
  imports: [RouterLink],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {
  user = inject(UserDataService).user;
}