// Subtle entrance animation for the social account cards.
document.querySelectorAll(".link-card").forEach((card,index)=>{
  card.animate(
    [{opacity:0,transform:"translateY(12px)"},{opacity:1,transform:"translateY(0)"}],
    {duration:450,delay:index*100,easing:"ease-out",fill:"both"}
  );
});
