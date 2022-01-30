document.addEventListener("DOMContentLoaded", () => {
  const c = document.cookie.split("; "),
    t = c.find(r => r.startsWith("theme=")),
    o = "path=/; samesite=strict; expires";
  document.documentElement.classList[(t &&
    t.split("=")[1] == "invert")?"add":"remove"]("invert");
  document.getElementById("invert").addEventListener("click", () => {
    document.cookie = (document.documentElement.classList.toggle("invert")?
      `theme=invert; ${o}=Fri, 31 Dec 9999 23:59:59 GMT`:
      `theme=; ${o}=Thu, 01 Jan 1970 00:00:00 GMT`);
  });

  const randStr = "0123456789abcdefghijklnopqrstuvxyzABCDEFGHIJKLNOPQRSTUVXYZ#$_&-+()/*':;!?,.~`|•√π÷×¶∆£¢€^°={}[]<>";
  function scramble() {
    [...document.querySelectorAll(".scramble")].forEach(e =>
      e.innerText = e.innerText.replace(/[^\s]/g, () =>
        randStr.charAt(Math.floor(Math.random()*randStr.length))));
  } setInterval(scramble, 100); scramble();
});
