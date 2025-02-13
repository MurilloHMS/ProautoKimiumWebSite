import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  quantidadeProdutos = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
      this.cartService.getCartCount().subscribe(count => {
        this.quantidadeProdutos = count;
      })
  }
}
