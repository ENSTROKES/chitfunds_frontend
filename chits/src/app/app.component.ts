import { Component ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admindashboard';
  
  constructor(private elementRef: ElementRef,  public  _router: Router,private bnIdle: BnNgIdleService ) { 
    
  }
  showInfoAlert() {
    Swal.fire({
      title: 'Session expired',
      text: 'Please log in again',
      icon: 'info',
      showCancelButton: false,
      confirmButtonText: '   Ok   ',
      customClass: {
        confirmButton: 'my-confirm-button-class',
        
        
      }
      
    }).then((result) => {

      if (result.isConfirmed) {

       location.reload();

      }
    })
   
  }

  isLoginPage(): boolean {
    // Implement the logic to check if the current page is the login page
    // Return true if it is the login page, false otherwise
    return window.location.pathname.includes('/pages-login');
  }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    this.bnIdle.startWatching(30000).subscribe((isTimedOut: boolean) => {
      if (isTimedOut && !this.isLoginPage()) {
        // Question
        localStorage.clear();
       this.showInfoAlert() ;
       
        this.bnIdle.stopTimer();
      }
    });
    
  }

  }

