// make an object to filter through homepage menu

const homepageMenu = [
  nobel = {
    title: "Nobel Laureate App",
    desc: "Learn about past Nobel Laureates using the Nobel Prize API",
    stack: ["React Native","JavaScript","HTML","CSS"],
    img: "media/nobel-app.png",
    repo: "www",
    item: 1 
  },
  giphy = {
    title: "Message Board App",
    desc: "Dark-mode chat app built with Socket.io",
    stack: ["Socket.io","JavaScript","HTML","CSS"],
    img: "media/chat-app.png",
    repo: "www",
    item: 5

  },
  network_scanner = {
    title: "ICMP and TCP Network Scanner",
    desc: "Scan a network of your choice for responsive hosts (ICMP) or open ports (TCP).",
    stack: ["Python"],
    img: "media/network-scanner.png",
    repo: "https://github.com/touchableAura/dns-python-assignment.git",
    item: 3
  },
  log_analyzer = {
    title: "Log File Analyzer",
    desc: "Parse log files line by line and visualize data based on component frequency.",
    stack: ["Python"],
    img: "media/log-analyzer.png",
    repo: "https://github.com/touchableAura/dns-python-assignment.git",
    item: 4
  }
];

const folderStatus = [
  {closed : '<span class="material-symbols-outlined"> terminal </span>'},
  {open : '<span class="material-symbols-outlined"> folder_open </span>'}
]



const buttons = document.querySelectorAll('button[class^="react"], button[class^="python"], button[class^="js"], button[class^="unity"]');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const id = event.target.id;
    const itemNumber = parseInt(id.substring(4)); // Extract the number from the button's id
    const selectedItem = homepageMenu.find((item) => item.item === itemNumber);

    if (selectedItem) {
      document.querySelector('.title-preview').textContent = selectedItem.title;
      document.querySelector('.paragraph-preview').textContent = selectedItem.desc;
      document.querySelector('.img-preview img').src = selectedItem.img;
      document.querySelector('.github-preview').textContent = selectedItem.repo;
    }
  });
});


// Function to update the content based on the selected item
function updateContent(itemIndex) {
  const selectedItem = homepageMenu[itemIndex];

  // Update the content with data from the selected item
  document.querySelector('.title-preview').textContent = selectedItem.title;
  document.querySelector('.paragraph-preview').textContent = selectedItem.desc;
  document.querySelector('.img-preview img').src = selectedItem.img;
  document.querySelector('.github-preview').textContent = selectedItem.repo;
}

// Add click event listeners to each list item
document.querySelectorAll('#scroll-nav1 li').forEach((listItem, index) => {
  listItem.addEventListener('click', () => {
    updateContent(index);
  });
});




// console.log(homepageMenu[0].title)
// console.log(homepageMenu[0].desc)
// console.log(homepageMenu[0].stack[0])
// console.log(homepageMenu[0].stack[1])
// console.log(homepageMenu[0].stack[2])
// console.log(homepageMenu[0].stack[3])
// console.log(homepageMenu[0].img)
// console.log(homepageMenu[0].repo)
