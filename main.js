
$(document).ready(function(){
    // Direct JS array instead of AJAX
    let games = [
  { title: "Car Racing", image: "images/car.jpeg", url: "games/car.html" },
  { title: "Puzzle Master", image: "images/puzzle.jpeg", url: "games/puzzle.html" },
  { title: "Snake", image: "images/snake.png", url: "games/snake.html" },
  { title: "Flappy Bird", image: "images/Flappy-Bird.jpeg", url: "games/flappy.html" },
  { title: "Brick Breaker", image: "images/Brick-Breaker.png", url: "games/brick-breaker.html" },
  { title: "Memory Match", image: "images/Memory-Match.jpeg", url: "games/memory.html" },
  { title: "Tic Tac Toe", image: "images/Tic-Tac-Toe.png", url: "games/tictactoe.html" }
];

    let html = '';
    $.each(games, function(i, game){
        html += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${game.image}" class="card-img-top" alt="${game.title}">
                    <div class="card-body text-center">
                        <h5>${game.title}</h5>
                        <a href="${game.url}" class="btn btn-primary">Play Now</a>
                    </div>
                </div>
            </div>
        `;
    });
    $("#featuredGames").html(html);
});
