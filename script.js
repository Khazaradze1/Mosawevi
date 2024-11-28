        // Request permission for browser notifications
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }

        // Function to trigger notification
        function sendNotification() {
            if (Notification.permission === "granted") {
                new Notification("მოვწიოთ???");
            } else {
                alert("ჩართე შეტყობინებები!!");
            }
        }

        // Function to create smoke effect
        function createSmokeEffect() {
            // Create a number of smoke particles (4-5 per click)
            for (let i = 0; i < 5; i++) {
                const smoke = document.createElement('div');
                smoke.classList.add('smoke');
                smoke.style.setProperty('--i', i); // Apply staggered animation delay
                document.getElementById('notifyButton').appendChild(smoke);

                // Remove the smoke after animation duration
                setTimeout(() => {
                    smoke.remove();
                }, 2000); // Match duration of the smoke animation
            }
        }

        // Event listener for button click
        document.getElementById("notifyButton").addEventListener("click", function() {
            sendNotification();

            // Trigger burning effect animation
            this.classList.add("burning");

            // Create smoke effects on click
            createSmokeEffect();
            
            // Remove burning effect after animation completes
            setTimeout(() => {
                this.classList.remove("burning");
            }, 300);
        });