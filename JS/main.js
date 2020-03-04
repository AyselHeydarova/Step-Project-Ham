

let tabs = document.getElementById('tabs');
let serviceTab = document.getElementsByClassName('service-tab');
let serviceContent = document.getElementsByClassName('service-content');
let serviceContentArray = [...serviceContent];
let serviceTabArray = [...serviceTab];

tabs.addEventListener('click', event =>{
    let pressedTab = event.target;
    console.log(pressedTab);
    let openedTabIndex = serviceTabArray.indexOf(pressedTab);
    console.log(openedTabIndex);

    for (let i = 0 ; i <serviceTabArray.length; i++) {
        if (i === openedTabIndex) {
            serviceTabArray[openedTabIndex].classList.add('current');
            serviceContentArray[openedTabIndex].classList.add('default');
            console.log(openedTabIndex);
        } else {
            serviceTabArray[i].classList.remove('current');
            serviceContentArray[i].classList.remove('default');
        }

    }

    });




// ______Gallery____________

const _CATEGORIES = [
    'Graphic Design',
    'Web Design',
    'Landing Pages',
    'Wordpress'
];

const galleryTabs = document.querySelector('.work-tabs');
_CATEGORIES.forEach(item => {
        const containerTab = document.createElement('div');

        containerTab.innerText = item;

        containerTab.classList.add('work-tab-item');

        containerTab.dataset.tabCategory = item;
        galleryTabs.append(containerTab);
    }
);

const _TABS_CONTENT = [
    {
        imgSrc: "Images/graphic design/graphic-design1.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design2.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design3.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },
    {
        imgSrc: "Images/graphic design/graphic-design4.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design5.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design6.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design7.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design8.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design9.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design10.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design11.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/graphic design/graphic-design12.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/wordpress/wordpress6.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/web design/web-design1.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/web design/web-design2.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/web design/web-design3.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/web design/web-design4.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/web design/web-design5.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/web design/web-design6.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/web design/web-design7.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/wordpress/wordpress5.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/wordpress/wordpress1.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/wordpress/wordpress2.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

    {
        imgSrc: "Images/wordpress/wordpress3.jpg",
        title: 'Creative Design',
        category: _CATEGORIES[(Math.floor(Math.random() * (_CATEGORIES.length)))]
    },

];

const renderTabContent = tabItem => {
    const {imgSrc, title, category} = tabItem,
        container = document.createElement('div'),
        img = document.createElement('img')

    container.classList.add('gallery-item');
    img.classList.add('gallery-item-img');
    img.src = imgSrc;

    container.dataset.category = category;
    container.append(img);

    container.addEventListener('mouseenter', e => {
        const hoverContainer = document.createElement('div'),
            hoverIconShare = document.createElement('i'),
            hoverIconSearch = document.createElement('i'),
            hoverTitle = document.createElement('h4'),
            hoverCategory = document.createElement('p')

        hoverContainer.classList.add('gallery-hover-wrapper');
        hoverIconShare.classList.add('fas');
        hoverIconShare.classList.add('fa-link');
        hoverIconShare.classList.add('icon');
        hoverIconSearch.classList.add('fas');
        hoverIconSearch.classList.add('fa-search-plus');
        hoverIconSearch.classList.add('icon');
        hoverTitle.classList.add('gallery-hover-title');
        hoverCategory.classList.add('gallery-hover-category');

        hoverTitle.innerText = title;
        hoverCategory.innerText = category;

        hoverContainer.append(
            hoverIconShare,
            hoverIconSearch,
            hoverTitle,
            hoverCategory
        );

        container.append(hoverContainer);
    });

    container.addEventListener('mouseleave', e => {
        container.querySelector('.gallery-hover-wrapper').remove();
    });

    document.querySelector('.work-gallery').append(container)
};

_TABS_CONTENT.slice(0, 12).forEach(renderTabContent);

galleryTabs.addEventListener('click', event => {
    let clickedTab = event.target;

    if (clickedTab.innerText === "All") {
        document.querySelector('.work-gallery').innerHTML = '';
        _TABS_CONTENT.slice(0, 12).forEach(renderTabContent);
    } else {

        let clickedContent = _TABS_CONTENT.filter(item => {
            return item.category.toLowerCase() === clickedTab.dataset.tabCategory.toLowerCase();
        });
        console.log(clickedContent);
        document.querySelector('.work-gallery').innerHTML = '';
        clickedContent.forEach(renderTabContent);
    }

    const old = document.querySelector('.work-tab-active');
    old.classList.remove('work-tab-active');
    clickedTab.classList.add('work-tab-active')
});


const loadBtn = document.querySelector('.load-btn');

loadBtn.addEventListener('click', event => {
        _TABS_CONTENT.slice(13, 24).forEach(renderTabContent);
        loadBtn.remove();
    }
);

