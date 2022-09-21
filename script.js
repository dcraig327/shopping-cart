


function createTitle() {
  const title = 'Vivus Viral Shopping Cart';
  document.title = title;
}

function createH1Header() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to the fun!';
  document.body.appendChild(h1);
}

function createHtmlPage() {
  createTitle();
  createH1Header();
}

function main() {
  createHtmlPage();
}
////////////////////////////////////////////////////////////////////////////////
main();