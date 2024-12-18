/* Function to dynamically load html content */
function loadHTMLComponent(targetId, component) {
    fetch(component)
    .then(response => {
        if (!response.ok) {
        throw new Error('No se pudo cargar el archivo HTML');
        }
        return response.text();
    })
    .then(data => {
        const target = document.getElementById(targetId);
        if (!target) {
            console.error('El elemento objetivo no existe.');
            return;
        }

        target.classList.add('fade-in-component');
        target.classList.remove('show');

        target.innerHTML = '';
        target.innerHTML = data;
        void target.offsetWidth;

        setTimeout(() => {
            target.classList.add('show');
        }, 200);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById(targetId).innerHTML = '<p>Error al cargar el contenido.</p>';
    });
}

/* Removable Component */
function addRemovableComponent(targetId, component) {
    var target = document.getElementById(targetId);
    if(target != null) {
        fetch(component)
        .then(response => {
            if (!response.ok) {
            throw new Error('No se pudo cargar el archivo HTML');
            }
            return response.text();
        })
        .then(data => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = data;
            wrapper.classList.add('removable-component');

            wrapper.addEventListener('removeComponent', () => {
                wrapper.classList.add('fade-out-component');
                wrapper.addEventListener('transitionend', () => {
                    wrapper.remove();
                });
            });

            target.appendChild(wrapper);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

/*
    This should be called from a component added
    with addRemovableComponent function
*/
function selfRemove(callerThis) {
    const maxDepth = 30;
    let depth = 1;
    let parent = callerThis.parentElement;
    while(parent){
        if (parent.classList.contains('removable-component')) {
            parent.dispatchEvent(
                new CustomEvent('removeComponent')
            );
            break;
        } else {
            parent = parent.parentElement;
        }
        depth++;
        if(depth > maxDepth) {
            break;
        }
    }
    if(parent == null || depth > maxDepth) {
        console.warn("selfRemove Error: removable-component not found in hierarchy");
    }
}

/* replace removable component */
function replaceRemovableComponent(callerThis, component) {
    const maxDepth = 30;
    let depth = 1;
    let parent = callerThis.parentElement;
    while(parent){
        if (parent.classList.contains('removable-component')) {
            //since removable components root doesnt have ids we need to add one
            let id = generateUniqueId();
            parent.id = id;
            //since we keep the root node we already have the removeComponent
            //event listener and the next component will keep the removable structure
            loadHTMLComponent(id, component);
            break;
        } else {
            parent = parent.parentElement;
        }
        depth++;
        if(depth > maxDepth) {
            break;
        }
    }
    if(parent == null || depth > maxDepth) {
        console.warn("selfRemove Error: removable-component not found in hierarchy");
    }
}

function generateUniqueId() {
    return 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

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
    input?.addEventListener('input', (event) => {
        if (event.target.value.length > 0) {
            document.getElementById('cancel-icon').style.display = 'block';
            document.getElementById('cancel-icon').style.right = '16px';
            document.getElementById('cancel-icon').style.left = 'auto';
            document.getElementById('search-result').style.display = 'flex';
        }
        if (event.target.value.length === 0) {
            document.getElementById('cancel-icon').style.display = 'none';
            document.getElementById('search-result').style.display = 'none';
        }
    });

    if(input != null) {
        /*  Hide element after 5 seconds when page is loaded */
        setTimeout(function() {
            const alertDiv = document.getElementById('popover');
            if(alertDiv != null) {
                alertDiv.classList.add('hide-item');
            }
        }, 5000);
    }
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

function showMap() {
    document.getElementById('side-menu-container').classList.add('show-map');
}
function hideMap() {
    document.getElementById('side-menu-container').classList.remove('show-map');
}

/* Function to show menu in mobile */
function showMobileMenu() {
    document.getElementById('side-menu-container').classList.add('show-mobile-menu');
    document.getElementById('zoom-icons').classList.add('show-mobile-menu');
    document.getElementById('content').classList.add('show-mobile-menu');
    document.getElementById('popover').classList.add('show-mobile-menu');
    document.getElementById('menu-container').classList.add('show-mobile-menu');
    document.getElementById('sidemenu-collapse').classList.add('show-mobile-menu');
    document.getElementById('card-modal').classList.add('hide-item');
    document.getElementById('tooltip-container').classList.add('hide-item');
}

/* Function to hide menu in mobile */
function closeMobileMenu() {
    document.getElementById('side-menu-container').classList.remove('show-mobile-menu');
    document.getElementById('zoom-icons').classList.remove('show-mobile-menu');
    document.getElementById('content').classList.remove('show-mobile-menu');
    document.getElementById('popover').classList.remove('show-mobile-menu');
    document.getElementById('menu-container').classList.remove('show-mobile-menu');
    document.getElementById('sidemenu-collapse').classList.remove('show-mobile-menu');
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

/* Check emergency type */
function goToEmergencyCreationPage() {
    const normalRadio = document.getElementById('normal-emergency');
    if(normalRadio != null && normalRadio.checked) {
        loadHTMLComponent('side-menu-content', 'componentes/normal-emergency-1.html');
    } else {
        loadHTMLComponent('side-menu-content', 'componentes/mayor-emergency-1.html');
    }
}

/* popuate a target with required components */
function populateWithRemovableComponents(id, count, component) {
    for(let item = 1; item <= count; item++) {
        addRemovableComponent(id, component);
    }
}

/* clear all target removable components */
function clearAllRemovableComponents(targetId) {
    const target = document.getElementById(targetId);
    const removableComponents = target.querySelectorAll('.removable-component');

    removableComponents.forEach((component) => {
        component.dispatchEvent(new CustomEvent('removeComponent'));
    });

    console.log(`${removableComponents.length} componentes removidos.`);
}

