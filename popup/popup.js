browser.tabs
  .query({
    active: true,
    currentWindow: true
  })
  .then(x => {
    const urls = x.map(y => y.url);
    if (urls.length <= 0) {
      return;
    }
    window.open(
      `https://open.vein.space/#/post?url=${encodeURIComponent(urls[0])}`
    );
  })
  .catch(x => {
    console.error("err", x);
  });
