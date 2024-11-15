function click1(event) {
    /** @type{ons.OnsNavigatorElement} */
    const onsNavigator1 = document.getElementById('ons-navigator1');
    onsNavigator1.pushPage('page4.html');
}

document.addEventListener('init', (event) => {
    let page = event.target;
    if (page.id === 'ons-page5') {
        let onsbutton1_element = document.querySelector('#ons-button1');
        if(onsbutton1_element) {
            onsbutton1_element.addEventListener('click', click1);
            page.addEventListener('destroy', function(event) {
                onsbutton1_element.removeEventListener('click', click1);
            }, { 'once' : true });
        }
    }
});
