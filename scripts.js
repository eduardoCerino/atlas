 
 
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
    const content = document.getElementsByClassName('content');
    content[0].style.display = 'none';
    const sideBtn = document.getElementsByClassName('sidemenu-collapse');
    sideBtn[0].style.display = 'none';

}


