function select() {
  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
    const arrow = dropDownWrapper.querySelector('.dropdown__icon');

    dropDownBtn.addEventListener('click', function () {
      dropDownList.classList.toggle('dropdown__list--visible');
      arrow.classList.toggle('dropdown__icon--arowd');
      arrow.classList.toggle('dropdown__icon--arowup');
    });

    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownInput.value = this.dataset.value;
        arrow.classList.toggle('dropdown__icon--arowup');
        arrow.classList.toggle('dropdown__icon--arowd');
        dropDownList.classList.remove('dropdown__list--visible');
      })
    });

    // document.addEventListener('click', function (e) {
    //   if (e.target !== dropDownBtn) {
    //     dropDownList.classList.remove('dropdown__list--visible');
    //     arrow.classList.toggle('dropdown__icon--arowup');
    //     arrow.classList.toggle('dropdown__icon--arowd');
    //   }
    // })

    // document.addEventListener('keydown', function (e) {
    //   if (e.key === 'Escape') {
    //     dropDownList.classList.remove('dropdown__list--visible');
    //     arrow.classList.toggle('dropdown__icon--arowup');
    //     arrow.classList.toggle('dropdown__icon--arowd');
    //   }
    // })
  })
};

export default select;