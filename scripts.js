$(document).ready(function () {
    // Manually defined perfume data
    let perfumes = [
        {
            title: 'Essence de Rose',
            description: 'Fresh, floral, romantic',
            price: 149.99,
            image: 'images/perfume (1).jpeg'
        },
        {
            title: 'Brise Marine',
            description: 'Refreshing, aquatic, clean',
            price: 159.99,
            image: 'images/perfume (2).jpeg'
        },
        {
            title: 'Champs de Lavande',
            description: 'Aromatic, calming, floral',
            price: 154.99,
            image: 'images/perfume (3).jpeg'
        },
        {
            title: 'Éclat d’Agrumes',
            description: 'Fruity, zesty, vibrant',
            price: 144.99,
            image: 'images/perfume (4).jpeg'
        },
        {
            title: 'Soleil d’Été',
            description: 'Warm, bright, radiant',
            price: 146.99,
            image: 'images/perfume (5).jpeg'
        },
        {
            title: 'Mystère Nocturne',
            description: 'Intense, bold, captivating',
            price: 169.99,
            image: 'images/perfume (6).jpeg'
        },
        {
            title: 'Fleur de Vanille',
            description: 'Sweet, tropical, soft',
            price: 139.99,
            image: 'images/perfume (7).jpeg'
        },
        {
            title: 'Amour Parisien',
            description: 'Romantic, elegant, timeless',
            price: 174.99,
            image: 'images/perfume (8).jpeg'
        },
        {
            title: 'Jardin Enchanté',
            description: 'Floral, magical, fresh',
            price: 151.99,
            image: 'images/perfume (9).jpeg'
        },
        {
            title: 'Étoile Filante',
            description: 'Fresh, light, airy',
            price: 162.99,
            image: 'images/perfume (10).jpeg'
        },
        {
            title: 'Velours Pourpre',
            description: 'Rich, fruity, luxurious',
            price: 158.99,
            image: 'images/perfume (11).jpeg'
        },
        {
            title: 'Bois de Santal',
            description: 'Woody, spicy, exotic',
            price: 155.49,
            image: 'images/perfume (12).jpeg'
        },
        {
            title: 'Pétale de Jasmin',
            description: 'Elegant, floral, exotic',
            price: 142.49,
            image: 'images/perfume (13).jpeg'
        },
        {
            title: 'Élixir d’Améthyste',
            description: 'Sophisticated, deep, mysterious',
            price: 165.99,
            image: 'images/perfume (14).jpeg'
        },
        {
            title: 'Rêve d’Or',
            description: 'Precious, luminous, elegant',
            price: 157.99,
            image: 'images/perfume (15).jpeg'
        },
        {
            title: 'Flamme Passionnée',
            description: 'Bold, daring, sensual',
            price: 169.49,
            image: 'images/perfume (16).jpeg'
        },
        {
            title: 'Douceur de Miel',
            description: 'Sweet, warm, cozy',
            price: 147.49,
            image: 'images/perfume (17).jpeg'
        },
        {
            title: 'Lune Argentée',
            description: 'Light, mysterious, ethereal',
            price: 163.99,
            image: 'images/perfume (18).jpeg'
        },
        {
            title: 'Vent de Provence',
            description: 'Fresh, Mediterranean, airy',
            price: 153.99,
            image: 'images/perfume (19).jpeg'
        },
        {
            title: 'Ombre de Soie',
            description: 'Soft, sensual, sweet',
            price: 161.49,
            image: 'images/perfume (20).jpeg'
        }
    ];
    // Function to render perfumes to the page
    function renderPerfumes(perfumes) {
        $('#perfume-list').empty(); // Clear existing items
        perfumes.forEach(function (perfume) {
            $('#perfume-list').append(`
            <div class="perfume-item">
                <img src="${perfume.image}" alt="${perfume.title}">
                <h3>${perfume.title}</h3>
                <p class="description">${perfume.description}</p>
                <p class="price">Price: $${perfume.price.toFixed(2)}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `);
        });
    }

    // Initial render
    renderPerfumes(perfumes);

    // Optional: Add to Cart functionality
    $(document).on('click', '.add-to-cart', function () {
        showModal('Added to cart!');
    });

    // Function to show the modal with a specific message
    function showModal(message) {
        // Check if modal exists, if not, create it
        if ($('#custom-modal').length === 0) {
            $('body').append(`
            <div id="custom-modal" class="modal">
                <div class="modal-content">
                    <p id="modal-text">${message}</p>
                    <button id="close-modal">OK</button>
                </div>
            </div>
        `);

            // Initialize modal styles if not already present
            $('head').append(`
            <style>
                .modal {
                    display: none; /* Hidden by default */
                    position: fixed; /* Stay in place */
                    z-index: 1000; /* Sit on top */
                    left: 0;
                    top: 0;
                    width: 100%; /* Full width */
                    height: 100%; /* Full height */
                    overflow: auto; /* Enable scroll if needed */
                    background-color: rgba(0, 0, 0, 0.5); /* Black with opacity */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .modal-content {
                    background-color: var(--color-light-pink);
                    padding: 20px 30px;
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    text-align: center;
                    max-width: 400px;
                    width: 80%;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                
                .modal-content p {
                    color: var(--color-text-dark);
                    font-size: 18px;
                    margin-bottom: 20px;
                }
                
                .modal-content button {
                    background-color: var(--color-dark-pink);
                    color: var(--color-text-dark);
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                    font-size: 16px;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }
                
                .modal-content button:hover {
                    background-color: var(--color-medium-pink);
                }
            </style>
        `);
        } else {
            $('#modal-text').text(message);
        }

        // Show the modal
        $('#custom-modal').fadeIn();

        // Close modal on button click
        $('#close-modal').off('click').on('click', function () {
            $('#custom-modal').fadeOut();
        });

        // Close modal when clicking outside the modal content
        $(window).off('click').on('click', function (event) {
            if ($(event.target).is('#custom-modal')) {
                $('#custom-modal').fadeOut();
            }
        });
    }

    // Optional: Search functionality
    $('#search-bar').on('keyup', function () {
        let query = $(this).val().toLowerCase();
        let filteredPerfumes = perfumes.filter(perfume =>
            perfume.title.toLowerCase().includes(query) ||
            perfume.description.toLowerCase().includes(query)
        );
        renderPerfumes(filteredPerfumes);
    });
});