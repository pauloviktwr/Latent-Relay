import { Component, OnDestroy, afterNextRender, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  id: number;
  title: string;
  image: string;
  alt: string;
  route: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnDestroy {
  private cdr = inject(ChangeDetectorRef);

  showBridge = false;
  bridgeMessage = '';
  private typewriterInterval: ReturnType<typeof setInterval> | null = null;

  navItems: NavItem[] = [
    { id: 1, title: 'devices', image: 'assets/devices/ressonance.jpg', alt: 'devices', route: '/devices' },
    { id: 2, title: 'places', image: 'assets/places/a.jpg', alt: 'places', route: '/places' },
    { id: 3, title: 'data', image: 'assets/data/adata.jpg', alt: 'data', route: '/data' }
  ];

  constructor() {
    afterNextRender(() => {
      this.startBridgeIntro();
    });
  }

  ngOnDestroy(): void {
    if (this.typewriterInterval) clearInterval(this.typewriterInterval);
  }

  private startBridgeIntro(): void {
    const message = 'Bem-vindo ao Bridge Relay. Eu sou Bridge. Este espaço surgiu quando fenômenos inexplicados começaram a desafiar tudo o que sabíamos sobre física, relatividade geral e especial, questões filosóficas, teóricas e metainformação.';
    let charIndex = 0;

    this.bridgeMessage = '';
    this.showBridge = true;
    this.cdr.detectChanges();

    this.typewriterInterval = setInterval(() => {
      if (charIndex < message.length) {
        this.bridgeMessage += message.charAt(charIndex);
        charIndex++;
        this.cdr.detectChanges();
      } else {
        if (this.typewriterInterval) clearInterval(this.typewriterInterval);
      }
    }, 90);
  }
}