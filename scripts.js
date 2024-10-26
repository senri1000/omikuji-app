const omikujiResults =
  [ 
    { text: "星4", img: "star4.jpg", probability: 10 },
    { text: "星3", img: "star3.jpg", probability: 20 },
    { text: "星2", img: "star2.jpg", probability: 30 },
    { text: "星1", img: "star1.jpg", probability: 40 } 
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