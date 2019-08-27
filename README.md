# FL-11

function editButtons() {
    document.querySelector('ul').addEventListener('click', function (event) {
        const target = event.target;
        let delBtn = document.querySelectorAll('.deleteBtn');
        if (target.innerHTML === 'Delete') {
            let liElem = document.querySelector('#li_elem1');
            target.addEventListener('click', function () {
                const userId = liElem.firstChild.getAttribute('id')
                let child = this.parentNode;
                console.log(child)
                let parent = child.parentNode;
                console.log(parent)
                parent.removeChild(child);
                getResponseDelete(userId);
            });
        }
