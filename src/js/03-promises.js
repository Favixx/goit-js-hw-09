import Notiflix from "notiflix";
const form = document.querySelector(".form")

function createPromise(position, delay) {
  return new Promise((resolve, reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
    if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
  }, delay)
  })
}
form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const delay = parseInt(form.elements.delay.value)
  const step = parseInt(form.elements.step.value)
  const amount = parseInt(form.elements.amount.value)
  const promises = []
  for(let i=0; i<amount; i++){
    promises.push(createPromise(i+1, delay+i*step).then(({position, delay})=>{
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay})=>{
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
    )
  }
})