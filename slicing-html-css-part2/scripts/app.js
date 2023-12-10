const sidebarMenu = document.querySelector("#sidebar");
const buttonTogler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".sidebar_closer"); //ambil class dari HTML

const elementProjectComplete = document.querySelector('#value-project-complete'); //gunakan # untuk mengambil id
const elementYoe = document.querySelector('#value-yoe');

const elementNavigationMenus = document.querySelector('.navigation_menus');

/**
 * VALUE ONLY
 */

const containerValue = {
    projectComplete: 1000,
    Yoe: "500+"
};

const NavigationMenus = [{
    projectComplete: 1000,
    Yoe: "500+",
}, {
    projectComplete: 1500,
    Yoe: "600+"
}];

const navMenu = [
    {
        title: "Work",
        link: "/#"
    },
    {
        title: "About",
        link: "/#"
    },
    {
        title: "Service",
        link: "/#"
    },
    {
        title: "Contact",
        link: "/#"
    },
]

containerValue.projectComplete
NavigationMenus[1].projectComplete

buttonTogler.addEventListener('click', () => {
    sidebarMenu.classList.add("show");
    sidebarMenu.classList.remove("hide");
});

buttonCloser.addEventListener('click', () => {
    sidebarMenu.classList.add('hide');
    sidebarMenu.classList.add('show');
})

/** mengubah elemen dokumen dari javascript  
 * 'value-project-complete'
 * 'value-yoe'
*/

elementProjectComplete.append("1000");
elementYoe.append("500+");