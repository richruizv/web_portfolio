
document.addEventListener("visibilitychange", event => {
    if (document.visibilityState == "visible") {
        document.getElementById('title').innerHTML = '👋 Welcome back!';
        console.log("tab is active")
    } else {
        document.getElementById('title').innerHTML ='💓 Comeback soon';
      console.log("tab is inactive")
    }
  })