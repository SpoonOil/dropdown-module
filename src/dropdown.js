class Dropdown {
  constructor(node, triggerEvent) {
    this.parent = node;
    this.options = [...node.querySelectorAll('.hover-dropdown-option')];
    this.active = this.options[0];
    this.hideExtraOptions();
    this.parent.addEventListener(triggerEvent, () => {
      this.showAllOptions();
    });
    this.parent.addEventListener('mouseout', () => {
      this.hideExtraOptions();
    });
    this.parent.classList.add('h-fit', 'p-2', 'flex', 'flex-col', 'items-left', 'justify-start');
    this.setWidth();
    this.addListenersToOptions();
  }

  setActive(node) {
    this.active = node
  }

  addListenersToOptions() {
    this.options.forEach((option) => {
      option.addEventListener('click', () => {
        this.setActive(option);
      });
    });
  }

  setWidth() {
    let minWidth = 0;
    console.log(this.parent.clientWidth);
    this.showAllOptions();
    minWidth = this.parent.clientWidth + 'px';
    console.log(minWidth);
    this.hideExtraOptions();
    this.parent.style.minWidth = minWidth;
    console.log(this.parent.clientWidth);
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
