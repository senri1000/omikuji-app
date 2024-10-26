const omikujiResults =
  [ 
    { text: "星4", img: "star4.png", probability: 10 },
    { text: "星3", img: "star3.png", probability: 20 },
    { text: "星2", img: "star2.png", probability: 30 },
    { text: "星1", img: "star1.png", probability: 40 } 
  ];
document.getElementById("drawButton").addEventListener("click", function() 
  {
    const randomValue = Math.random() * 100;
    let cumulativeProbability = 0;
    let result;
    for (let i = 0; i < omikujiResults.length; i++) {
        cumulativeProbability += omikujiResults[i].probability;
        if (randomValue < cumulativeProbability) {
            result = omikujiResults[i]; break;
        } 
    } document.getElementById("result").textContent = result.text;
    document.getElementById("resultImage").src = result.img;
    document.getElementById("resultImage").style.display = "block"; 
  }
);