document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const card = document.querySelector('.card');
    const formData = new FormData(event.target);

    fetch('enviar_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            card.classList.add('flipped');
            document.querySelector('.card-back').innerHTML = `<h2>${data.message}</h2>`;
            event.target.reset(); 
        } else {
            alert(data.message);
        }

        setTimeout(function() {
            card.classList.remove('flipped');
            document.querySelector('.card-back').innerHTML = '<h2>Mensaje enviado</h2>';
        }, 4000);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.');
    });
});



document.getElementById('toggle_checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Cerrar el modal si se hace clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}

//Scroll icono
window.addEventListener('scroll', () => {
    const scrollMouse = document.getElementById('scrollMouse');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const fadeOutPoint = windowHeight * 0.1; 
    let opacityValue = 1;

    if (scrollPosition > fadeOutPoint) {
        opacityValue = Math.max(0, 1 - (scrollPosition - fadeOutPoint) / fadeOutPoint);
    }

    scrollMouse.style.opacity = opacityValue;
});
