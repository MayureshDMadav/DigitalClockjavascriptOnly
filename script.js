let id = document.createElement("div")
id.setAttribute("id", "time")

let style = document.createElement("style")
style.innerHTML = "#time{text-align: center;margin-top: 5rem;padding: 0;display: grid;font-size: 50px;color: cadetblue;background-image: linear-gradient(45deg, #ebcdcd, #96b58d);}"

document.head.append(style)
document.body.append(id)
let a = () => {
  setInterval(() => {
    let time = new Date();
    let b = time.toTimeString().replace("GMT+0530 (India Standard Time)", "");
    id.innerHTML = b
    console.log(b)
  }, 1000)

}

a()