import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.cart);

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(produto: any) {
    this.cart.push(produto);
    this.cartSubject.next(this.cart);
    console.log('Produto adicionado ao carrinho:', produto);
    console.log('Carrinho atual:', this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}