import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { family } from 'src/app/shared/interfaces/family.interface';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  slideIndex: number = 1; // Inicializa slideIndex
  @Input() data: family = {};

  teste: any;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.data = changes['data'].currentValue;
      this.teste =this.data.IMAGENS
      console.log(this.teste);
    }
  }

  ngOnInit(): void {
    this.showDivs();
  }

  currentDiv(n: number): void {
    this.slideIndex = n;
    this.showDivs();
  }

  showDivs(): void {
    let slides = this.el.nativeElement.getElementsByClassName('mySlides');
    let subImages = this.el.nativeElement.getElementsByClassName('demo');

    // Esconde todos os slides
    Array.from(slides).forEach((slide: unknown) => {
      this.renderer.setStyle(slide as HTMLElement, 'display', 'none');
    });

    // Remove a classe de opacidade de todos os pontos
    Array.from(subImages).forEach((dot: unknown) => {
      this.renderer.removeClass(dot as HTMLElement, 'w3-opacity-off');
    });

    // Mostra o slide atual e adiciona a classe de opacidade ao ponto atual
    if (slides.length > 0 && subImages.length > 0) {
      this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');
      this.renderer.addClass(subImages[this.slideIndex - 1], 'w3-opacity-off');
    }
  }
}
