// Interactive functionality
        document.addEventListener('DOMContentLoaded', function() {
            const cartButtons = document.querySelectorAll('.cart-btn');
            const wishlistButtons = document.querySelectorAll('.wishlist-btn');

            function showNotification(message, type = 'success') {
                // Create notification
                const notification = document.createElement('div');
                notification.className = `uk-alert-${type} notification-toast`;
                notification.setAttribute('uk-alert', '');
                notification.innerHTML = `
                    <a class="uk-alert-close" uk-close></a>
                    <div class="uk-flex uk-flex-middle">
                        <span uk-icon="icon: ${type === 'success' ? 'check' : 'heart'}; ratio: 1.2" class="uk-margin-small-right"></span>
                        <strong>${message}</strong>
                    </div>
                `;
                
                document.body.appendChild(notification);
                
                // Animate in
                setTimeout(() => {
                    notification.classList.add('show');
                }, 100);
                
                // Auto remove after 4 seconds
                setTimeout(() => {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.remove();
                        }
                    }, 300);
                }, 4000);
                
                // Initialize UIKit alert component
                UIkit.alert(notification);
            }

            function addButtonAnimation(button) {
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 150);
            }

            // Cart button functionality
            cartButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const productName = this.getAttribute('data-product');
                    addButtonAnimation(this);
                    showNotification(`${productName} added to cart! 🛒`, 'success');
                });
            });

            // Wishlist button functionality
            wishlistButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const productName = this.getAttribute('data-product');
                    addButtonAnimation(this);
                    showNotification(`${productName} added to wishlist! ❤️`, 'primary');
                    
                    // Change heart icon to filled
                    const icon = this.querySelector('span[uk-icon]');
                    if (icon) {
                        icon.setAttribute('uk-icon', 'heart');
                        this.classList.add('uk-button-danger');
                        this.classList.remove('uk-button-default');
                    }
                });
            });

            // Add counter animation to stats
            const statsNumbers = document.querySelectorAll('.stats-number');
            const animateCounter = (element) => {
                const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
                const increment = target / 50;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    const suffix = element.textContent.includes('%') ? '%' : 
                                 element.textContent.includes('K') ? 'K+' : '+';
                    element.textContent = Math.floor(current) + (current >= target ? suffix : '');
                }, 30);
            };

            // Intersection Observer for counter animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });

            statsNumbers.forEach(stat => {
                observer.observe(stat);
            });

            // Enhanced card interactions
            const cards = document.querySelectorAll('.uk-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = '1';
                });
            });

            // Add loading effect to images
            const images = document.querySelectorAll('.uk-card-media-top img');
            images.forEach(img => {
                img.addEventListener('load', function() {
                    this.style.opacity = '1';
                });
                
                // Add shimmer loading effect
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
            });
        });