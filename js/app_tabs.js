const tabs = document.querySelectorAll('.tabs');


tabs.forEach((elementTab) => {
    let tabsTabs = elementTab.querySelectorAll('.tabs__tab');
    let tabsContainers = elementTab.querySelectorAll('.tabs__container');
    let indexTabSelected = 0;
    let len = tabsTabs.length
    
    
    tabsContainers.forEach((element) => {
        element.style.backgroundColor = 'var(--main-green)';
    });

    tabsTabs.forEach(function(element, index) {

        element.style.width = `calc(100%/${len})`;

        if (index%2 == 0) {
            element.style.backgroundColor = 'var(--main-green)';
        } else {
            element.style.backgroundColor = 'var(--main-red)';
        }

        element.addEventListener('click', () => {
            tabsTabs[indexTabSelected].classList.remove('tabs__tab--selected');
            element.classList.add('tabs__tab--selected');
            tabsContainers[indexTabSelected].classList.remove('tabs__container--selected');
            tabsContainers[index].classList.add('tabs__container--selected');
            indexTabSelected = index;
            if (tabsTabs[indexTabSelected].style.backgroundColor == 'var(--main-green)') {
                tabsContainers[index].style.backgroundColor = 'var(--main-green)';
            } else if (tabsTabs[indexTabSelected].style.backgroundColor == 'var(--main-red)') {
                tabsContainers[index].style.backgroundColor = 'var(--main-red)';
            }
        });
    });
});

