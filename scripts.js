 
 
 /* Function to change menu option */
function selectMenuItem(menuId) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('menu-selected'));
    
    const selectedItem = document.getElementById(menuId);
    selectedItem.classList.add('menu-selected');
}

/* Function to collapse botton menu */
function collapseMenu() {
    const menuItems = document.querySelectorAll('.menu-item');
    const menuLines = document.querySelectorAll('.menu-separator');

    menuItems.forEach(item => item.classList.toggle('hide-item'));
    menuLines.forEach(line => line.classList.toggle('hide-item'));
}

/* Function to show/hide  anyelements */
function toggleElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('hide-item');
}


/* Function to collapse side bar menu */

function collapseSideBar() {
    const sideBar = document.getElementById('side-menu');
    sideBar.classList.toggle('hide-sidebar');

    const sideMenuContainer = document.getElementById('side-menu-container');
    sideMenuContainer.classList.toggle('hide-sidebar-container');   
}

/* Function to toogle image src */
function toogleImageSrc(imageId) {
    const sumaIcon = 'icono-resta.png';
    const restaIcon = 'icono-mas.png';

    const image = document.getElementById(imageId);
    const currentSrc = image.src;

    if (currentSrc.includes(sumaIcon)) {
        console.log("includes resta");
        image.src = './assets/images/icono-mas.png';
    } else {
        console.log("includes suma");
        image.src = './assets/images/icono-resta.png';
    }
}





window.onload = function() {



    let input = document.getElementById('searchinput');

    input.addEventListener('input', (event) => {
        if (event.target.value.length > 0) {
            document.getElementById('search-icon').style.display = 'none';
            document.getElementById('cancel-icon').style.display = 'block';
            document.getElementById('search-result').style.display = 'flex';
        } 

        if (event.target.value.length === 0) {
            document.getElementById('search-icon').style.display = 'block';
            document.getElementById('cancel-icon').style.display = 'none';
            document.getElementById('search-result').style.display = 'none';
        }


    });

/*  Hide element after 5 seconds when page is loaded */

    setTimeout(function() {
        const alertDiv = document.getElementById('popover');
        alertDiv.classList.add('hide-item');
    }, 5000);
}


/*  Function to show search in mobile and hide options */

function showSearch() {
    const options= document.getElementById('options');
    options.classList.toggle('hide-item');
    const searchMobile= document.getElementById('search-mobile');
    searchMobile.classList.toggle('hide-item');
    const search= document.getElementById('search');
    search.style.display = 'flex';
    search.style.width = '100%';
    search.style.justifyContent = 'center';

}


/* Function to rotate image */
function rotateImage(imageId) {
    const image = document.getElementById(imageId);
    image.classList.toggle('rotate-image');
}

/* Function to change checbox svg */

function changeCheckbox(checkboxEmptyId, checkboxCheckedId) {
    const checkboxEmpty = document.getElementById(checkboxEmptyId);
    const checkboxChecked = document.getElementById(checkboxCheckedId);

    checkboxEmpty.classList.toggle('hide-item');
    checkboxChecked.classList.toggle('hide-item');
}

/* Function to show menu in mobile */
function showMobileMenu() {
    const mobileMenu = document.getElementById('side-menu-container');
    mobileMenu.style.display = 'flex';
    mobileMenu.style.marginTop = '800px';
    mobileMenu.style.width = '100%';
    mobileMenu.style.maxHeight = '80vh';
    mobileMenu.style.overflow = 'hidden';
    mobileMenu.style.paddingTop = '200px';
    const zooms = document.getElementsByClassName('zoom');
    // hide all zooms
    for (let i = 0; i < zooms.length; i++) {
        zooms[i].style.display = 'none';
    }

    const content = document.getElementsByClassName('content');
    content[0].style.width = '0%';
    content[0].style.padding = '0px';

    const popover = document.getElementById('popover');
    popover.style.display = 'none';

 
    const menuBottom = document.getElementsByClassName('menu-container');
    menuBottom[0].style.display = 'none';

    const sideBtn = document.getElementsByClassName('sidemenu-collapse');
    sideBtn[0].style.display = 'none';

    const svgElements = document.querySelectorAll('.side-menu-dropdown-header svg');
    svgElements.forEach(element => element.style.display = 'none');

    const menuHeader = document.getElementsByClassName('side-menu-header-title');
    menuHeader[0].style.backgroundColor = '#ffffff';
    menuHeader[0].style.borderRadius = '20px';

    const menuHeaderContainer = document.getElementsByClassName('side-menu');
    menuHeaderContainer[0].style.borderRadius = '20px';


    const menuTitle = document.getElementsByClassName('side-menu-header-title-text');
    menuTitle[0].style.color = '#55212E';

    const menuDropdown = document.querySelectorAll('.side-menu-dropdown-header h5');
    menuDropdown.forEach(element => element.style.fontSize = '16px');
}

/* Function to hide menu in mobile */
function closeMobileMenu() {
    const mobileMenu = document.getElementById('side-menu-container');
    mobileMenu.style.display = 'none';
    mobileMenu.style.marginTop = '';
    mobileMenu.style.width = '';
    mobileMenu.style.maxHeight = '';
    mobileMenu.style.overflow = '';
    mobileMenu.style.paddingTop = '';

    const zooms = document.getElementsByClassName('zoom');
    // show all zooms
    for (let i = 0; i < zooms.length; i++) {
        zooms[i].style.display = '';
    }

    const content = document.getElementsByClassName('content');
    content[0].style.width = '';
    content[0].style.padding = '';

    const popover = document.getElementById('popover');
    popover.style.display = '';

    const menuBottom = document.getElementsByClassName('menu-container');
    menuBottom[0].style.display = '';

    const sideBtn = document.getElementsByClassName('sidemenu-collapse');
    sideBtn[0].style.display = '';

    const svgElements = document.querySelectorAll('.side-menu-dropdown-header svg');
    svgElements.forEach(element => element.style.display = '');

    const menuHeader = document.getElementsByClassName('side-menu-header-title');
    menuHeader[0].style.backgroundColor = '';
    menuHeader[0].style.borderRadius = '';

    const menuHeaderContainer = document.getElementsByClassName('side-menu');
    menuHeaderContainer[0].style.borderRadius = '';

    const menuTitle = document.getElementsByClassName('side-menu-header-title-text');
    menuTitle[0].style.color = '';

    const menuDropdown = document.querySelectorAll('.side-menu-dropdown-header h5');
    menuDropdown.forEach(element => element.style.fontSize = '');
}



/* Function to change svg color */

function changeSvgColor(svgId) {
    const svg = document.getElementById(svgId);

    // Use `getAttribute` to get the current fill color
    const currentColor = svg.getAttribute('fill');

    // Toggle between the colors
    if (currentColor === '#666666') {
        svg.setAttribute('fill', '#81172C');
    } else {
        svg.setAttribute('fill', '#666666');
    }
}

