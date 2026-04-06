// window.addEventListener("keydown", (e)=>{
//   console.log("keydown", e.key, e);
//   if(e.key === "ArrowLeft"){
// 
//   }else if(e.key === "ArrowRight"){
// 
//   }
// });
// 
// window.addEventListener("keypress", (e)=>{
//   console.log("keypress", e.key, e);
// });

// bugfix on chrome KDE Plasma Linux (possibly on other platforms)

let stop_propagation = true;
function updateRules(){
  chrome.storage.sync.get("stop_propagation").then(({stop_propagation: v = true})=>{
    stop_propagation = v;
  });
}
updateRules();

chrome.storage.sync.onChanged.addListener(()=>{
  updateRules();
});


window.addEventListener("keyup", async (e)=>{
  console.log("keyup", e.key, e);
  if((e.key === "ArrowRight" || e.key === "ArrowLeft")
    && e.ctrlKey === true && e.shiftKey === true && stop_propagation){
    e.stopImmediatePropagation();
    e.preventDefault();
  }
}, true);

