const container=document.querySelector(".container");
  const btn=document.querySelector(".btn");
  const h=document.createElement("h1");
  btn.addEventListener("click",() => {
      
      
      const quote=["The pessimist sees difficulty in every opportunity.The optimist sees opportunity in every difficulty.",
      "Don’t let yesterday take up too much of today,You learn more from failure than from success. Don’t let it stop you. ",
      "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
      "Experience is a hard teacher because she gives the test first, the lesson afterwards."];
      
      var randomIndex=Math.floor(Math.random()*quote.length);
      
      quoteElement=quote[randomIndex];
      h.textContent=quoteElement;
      container.appendChild(h);
  });