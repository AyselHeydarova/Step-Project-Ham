
let tabs = document.getElementById('tabs');
let serviceTab = document.getElementsByClassName('service-tab');
let serviceContent = document.getElementsByClassName('service-content');
let serviceContentArray = [...serviceContent];
let serviceTabArray = [...serviceTab];

tabs.addEventListener('click', event=> {

    let pressedItem = event.target;
    let openTabIndex = serviceTabArray.indexOf(pressedItem);

    for (let i = 0; i < serviceTabArray.length; i++) {
        if (i === openTabIndex) {
            serviceTabArray[openTabIndex].style.backgroundColor = '#18cfab';
            serviceContentArray[openTabIndex].style.display = "flex";
        } else {
            serviceTabArray[openTabIndex].style.backgroundColor = '#f8fcfe';
            serviceContentArray[i].style.display = 'none';
        }
    }
});
