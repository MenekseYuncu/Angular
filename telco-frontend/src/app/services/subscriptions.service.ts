import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscriptions } from 'src/app/models/subscriptions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  private controllerUrl = `${environment.apiUrl}/subscriptions`;

  constructor(private httpClient: HttpClient) {}

  getSubscription(id: number | null) {
    return this.httpClient.get<subscriptions[]>(
      `${this.controllerUrl}?customerId=${id}`
    );
  }
}
