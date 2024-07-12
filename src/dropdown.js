class Dropdown {
  /**
  * represents a dropdown
  * @contructor
  * @param {Object} node - DOM Node.
  * @param {string} triggerEvent - eventListener event to trigger dropdown behavior.
  */
  constructor(node, triggerEvent) {
    this.parent = node;
    this.options = [...node.querySelectorAll('.hover-dropdown-option')];
    this.active = this.options[0];
    this.hideExtraOptions();
    this.parent.addEventListener(triggerEvent, () => { this.showAllOptions(); });
    this.parent.addEventListener('mouseout', () => { this.hideExtraOptions(); });
    this.parent.classList.add('h-fit', 'p-2', 'flex', 'flex-col', 'items-left', 'justify-start');
    this.setWidth();
    this.addListenersToOptions();
  }

  setActive(node) {
    this.active = node;
  }

  addListenersToOptions() {
    this.options.forEach((option) => {
      option.addEventListener('click', () => {
        this.setActive(option);
      });
      option.addEventListener('mouseover', (e) => {
        e.target.style.opacity = 0.5;
      });
    });
  }

  setWidth() {
    let minWidth = 0;
    this.showAllOptions();
    minWidth = this.parent.clientWidth + 'px';
    this.hideExtraOptions();
    this.parent.style.minWidth = minWidth;
  }

  unhideActive() {
    this.active.classList.remove('hidden');
  }

  showAllOptions() {
    this.options.forEach((option) => option.classList.remove('hidden'));
  }

  hideExtraOptions() {
    this.options.forEach((option) => option.classList.add('hidden'));
    this.unhideActive();
  }
}

export { Dropdown };
