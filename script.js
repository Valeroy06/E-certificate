// const hamburg = document.getElementById('hamburg');
// const nav =document.getElementsByClassName('nav');

// hamburg.addEventListener('click', () => {
//     nav.classlist.toggle('show')[1];
// });

function myFunction() {
    var x = document.getElementsByClassName("nav")[0];
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  
    // function myFunction() {
    //     var x = document.getElementsByClassName("apps")[0];
    //     if (x.style.display === "block") {
    //       x.style.display = "none";
    //     } else {
    //       x.style.display = "block";
    //     }
    //   }

  