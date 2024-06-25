window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++){
        const tab_switcher = tab_switchers[i];
        const tracker_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.sub-menu .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');
            
            SwitchTracker(tracker_id)

         });
    }
}

function SwitchTracker(tracker_id){
    const current_tracker = document.querySelector('.pages .page.is-active');
    current_tracker.classList.remove('is-active');

    const next_tracker = document.querySelector(`.pages .page[data-page="${tracker_id}"]`);
    next_tracker.classList.add('is-active')


}