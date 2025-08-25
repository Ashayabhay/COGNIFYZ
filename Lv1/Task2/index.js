 // 1. Color-changing button functionality
        const colors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F44336', '#00BCD4', '#FF5722'];
        let currentColorIndex = 0;

        function changeColor() {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            const button = document.getElementById('colorButton');
            button.style.backgroundColor = colors[currentColorIndex];
            
            // Add a little animation effect
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        }

        // 2. Time-based greeting alert functionality
        function showGreeting() {
            const now = new Date();
            const hour = now.getHours();
            let greeting;

            if (hour < 12) {
                greeting = "Good Morning! ☀️ Hope you have a wonderful day ahead!";
            } else if (hour < 17) {
                greeting = "Good Afternoon! 🌤️ Hope your day is going well!";
            } else if (hour < 21) {
                greeting = "Good Evening! 🌅 Hope you're having a great evening!";
            } else {
                greeting = "Good Night! 🌙 Hope you have a peaceful night!";
            }

            alert(greeting);
        }

        // 3. Basic calculator functionality
        function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const resultDiv = document.getElementById('result');

            // Check if both inputs are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                resultDiv.innerHTML = '⚠️ Please enter valid numbers in both fields!';
                resultDiv.style.background = '#ffebee';
                resultDiv.style.color = '#c62828';
                return;
            }

            const sum = num1 + num2;
            resultDiv.innerHTML = `✅ Result: ${num1} + ${num2} = <strong>${sum}</strong>`;
            resultDiv.style.background = '#e8f5e8';
            resultDiv.style.color = '#2e7d32';

            // Add a subtle animation to the result
            resultDiv.style.opacity = '0';
            resultDiv.style.transform = 'translateY(10px)';
            setTimeout(() => {
                resultDiv.style.opacity = '1';
                resultDiv.style.transform = 'translateY(0)';
                resultDiv.style.transition = 'all 0.3s ease';
            }, 100);
        }

        // Allow Enter key to trigger calculation
        document.getElementById('num1').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calculate();
        });

        document.getElementById('num2').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calculate();
        });