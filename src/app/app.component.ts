import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentPage = 0;

  checkWindowIndex(index: number) {

    return Math.abs(this.currentPage - index);


  }

  images = [
    {
      title: "At the Beach",

      url:
        "https://images.unsplash.com/photo-1526675849333-144a81e4670d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Wave Beach",
      url:
        "https://images.unsplash.com/photo-1490162349623-066fff5599c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Football Beach",
      url:
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the Beach",

      url:
        "https://images.unsplash.com/photo-1526675849333-144a81e4670d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }, {
      title: "At the Beach",

      url:
        "https://images.unsplash.com/photo-1526675849333-144a81e4670d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Football Beach",
      url:
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      title: "Football Beach",
      url:
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      title: "Football Beach",
      url:
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Football Beach",
      url:
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      title: "Football Beach",
      url:
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      title: "Football Beach",
      url:
        "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ];
}
