// Floating particles animation
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = particle.style.height = (Math.random() * 10 + 5) + 'px';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                container.appendChild(particle);
            }
        }

        // Initialize particles
        createParticles();

        // Login modal functionality
        const loginBtn = document.getElementById('loginBtn');
        const loginModal = document.getElementById('loginModal');
        const loginForm = document.getElementById('loginForm');

        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });

        function closeModal() {
            loginModal.style.display = 'none';
        }

        // Close modal on outside click
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                closeModal();
            }
        });

        // Login form submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simulate login
            // Simulate login
if (email && password) {
    const role = document.getElementById("loginHeader").innerText.includes("Teacher")
      ? "teacher"
      : "student";

    // Redirect based on role
    if (role === "teacher") {
      window.location.href = "teacher-dashboard.html";
    } else {
      window.location.href = "student-dashboard.html";
    }
} else {
    alert("Please fill in all fields.");
}

            fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
})
.then(res => res.json())
.then(data => {
    if (data.message === "Login successful") {
        alert(data.message);
        closeModal();
        loginBtn.textContent = "Dashboard";
        loginBtn.style.background = "linear-gradient(45deg, #4caf50, #2e7d32)";
    } else {
        alert(data.message || "Login failed");
    }
})
.catch(err => console.error("Error:", err));

        });

        // Disaster type switching
        const disasterTypes = document.querySelectorAll('.disaster-type');
        const alertsData = {
            flood: [
                {
                    type: 'alert-flood',
                    badge: 'badge-high',
                    location: 'Assam, IN',
                    description: 'River Brahmaputra rising: low-lying areas inundated.',
                    time: '07:25 PM'
                },
                {
                    type: 'alert-flood',
                    badge: 'badge-moderate',
                    location: 'Kerala, IN',
                    description: 'Heavy rainfall warning for coastal regions.',
                    time: '06:45 PM'
                }
            ],
            fire: [
                {
                    type: 'alert-fire',
                    badge: 'badge-high',
                    location: 'California, US',
                    description: 'Wildfire spreading rapidly near residential areas.',
                    time: '08:15 PM'
                },
                {
                    type: 'alert-fire',
                    badge: 'badge-moderate',
                    location: 'Nashik, IN',
                    description: 'Dry winds increasing wildfire spread near orchards.',
                    time: '07:17 PM'
                }
            ],
            cyclone: [
                {
                    type: 'alert-cyclone',
                    badge: 'badge-high',
                    location: 'Odisha Coast, IN',
                    description: 'Cyclone Siena approaching; gusts up to 150 km/h.',
                    time: '07:30 PM'
                },
                {
                    type: 'alert-cyclone',
                    badge: 'badge-moderate',
                    location: 'Bangladesh Coast',
                    description: 'Storm surge expected in low-lying areas.',
                    time: '06:20 PM'
                }
            ],
            earthquake: [
                {
                    type: 'alert-flood',
                    badge: 'badge-moderate',
                    location: 'Japan, Tokyo',
                    description: 'Magnitude 5.2 earthquake detected. Aftershocks possible.',
                    time: '09:10 PM'
                },
                {
                    type: 'alert-cyclone',
                    badge: 'badge-low',
                    location: 'Indonesia',
                    description: 'Seismic activity monitoring in progress.',
                    time: '08:45 PM'
                }
            ]
        };

        disasterTypes.forEach(type => {
            type.addEventListener('click', () => {
                // Remove active class from all types
                disasterTypes.forEach(t => t.classList.remove('active'));
                // Add active class to clicked type
                type.classList.add('active');
                
                // Update alerts
                const selectedType = type.dataset.type;
                updateAlerts(selectedType);
            });
        });

        function updateAlerts(type) {
            const alertsContainer = document.querySelector('.alerts-panel');
            const alerts = alertsData[type] || [];
            
            let alertsHTML = '<h2 class="alerts-header">🚨 Live Regional Alerts</h2>';
            
            alerts.forEach((alert, index) => {
                alertsHTML += `
                    <div class="alert-item ${alert.type}" style="animation-delay: ${index * 0.1}s;">
                        <span class="alert-badge ${alert.badge}">${alert.badge.split('-')[1].toUpperCase()}</span>
                        <h3>${alert.location}</h3>
                        <p>${alert.description}</p>
                        <small>${alert.time}</small>
                    </div>
                `;
            });
            
            alertsContainer.innerHTML = alertsHTML;
        }

        // Quiz functionality
        function selectAnswer(element, isCorrect) {
            const options = element.parentNode.querySelectorAll('.quiz-option');
            
            // Remove previous selections
            options.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });
            
            // Add appropriate class
            if (isCorrect) {
                element.classList.add('correct');
                setTimeout(() => {
                    alert('Correct! 🎉');
                }, 300);
            } else {
                element.classList.add('incorrect');
                // Highlight the correct answer
                options.forEach(opt => {
                    if (opt.onclick.toString().includes('true')) {
                        opt.classList.add('correct');
                    }
                });
                setTimeout(() => {
                    alert('Not quite right. The correct answer is highlighted. 📚');
                }, 300);
            }
        }

        // Smooth scrolling
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Animate progress bars on scroll
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress-fill');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.style.width;
                        entry.target.style.width = '0%';
                        setTimeout(() => {
                            entry.target.style.width = width;
                        }, 200);
                    }
                });
            });

            progressBars.forEach(bar => observer.observe(bar));
        }

        // Initialize animations
        animateProgressBars();

        // Add real-time clock
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                hour12: true 
            });
            
            // Update alert times to show current time
            const alertTimes = document.querySelectorAll('.alert-item small');
            alertTimes.forEach((time, index) => {
                const offsetMinutes = (index + 1) * 5;
                const alertTime = new Date(now.getTime() - offsetMinutes * 60000);
                time.textContent = alertTime.toLocaleTimeString('en-IN', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true 
                });
            });
        }

        // Update clock every minute
        setInterval(updateClock, 60000);
        updateClock(); // Initial call

        // Add typing effect to hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Emergency contact simulation
        function showEmergencyContacts() {
            const contacts = {
                'Flood': ['📞 Flood Control: 1077', '🚤 Rescue Team: 108', '🏥 Medical: 102'],
                'Fire': ['🚒 Fire Brigade: 101', '🚑 Emergency: 108', '👮 Police: 100'],
                'Cyclone': ['🌪 Weather Alert: 1077', '📻 All India Radio: 1922', '⚠ NDMA: 1070'],
                'Earthquake': ['🏗 NDRF: 1070', '🏥 Trauma Care: 102', '📡 Seismic Center: 011-24362964']
            };
            
            const activeType = document.querySelector('.disaster-type.active').dataset.type;
            const typeContacts = contacts[activeType.charAt(0).toUpperCase() + activeType.slice(1)] || contacts['Flood'];
            
            alert('Emergency Contacts for ' + activeType.toUpperCase() + ':\n\n' + typeContacts.join('\n'));
        }

        // Add emergency contact button
        const emergencyBtn = document.createElement('button');
        emergencyBtn.textContent = '🆘 Emergency Contacts';
        emergencyBtn.className = 'btn-secondary';
        emergencyBtn.style.position = 'fixed';
        emergencyBtn.style.bottom = '20px';
        emergencyBtn.style.right = '20px';
        emergencyBtn.style.zIndex = '1000';
        emergencyBtn.addEventListener('click', showEmergencyContacts);
        document.body.appendChild(emergencyBtn);

        // Add notification system
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 1rem 2rem;
                background: ${type === 'alert' ? 'linear-gradient(45deg, #ff4444, #cc0000)' : 'linear-gradient(45deg, #00d4ff, #0099cc)'};
                color: white;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 2000;
                animation: slideInRight 0.5s ease;
                max-width: 300px;
                border: 1px solid rgba(255,255,255,0.2);
                backdrop-filter: blur(10px);
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideInRight 0.5s ease reverse';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 4000);
        }

        // Simulate real-time alerts
        function simulateAlerts() {
            const messages = [
                { text: '🌊 New flood warning for Punjab region', type: 'alert' },
                { text: '✅ Emergency drill scheduled for tomorrow', type: 'info' },
                { text: '🔥 Fire safety workshop registration open', type: 'info' },
                { text: '⚠ High wind alert for coastal areas', type: 'alert' }
            ];
            
            setInterval(() => {
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                showNotification(randomMessage.text, randomMessage.type);
            }, 30000); // Show notification every 30 seconds
        }

        // Start alert simulation
        setTimeout(simulateAlerts, 5000);

        // Add search functionality
        function addSearchFeature() {
            const searchContainer = document.createElement('div');
            searchContainer.style.cssText = `
                position: fixed;
                top: 100px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1000;
                display: none;
            `;
            
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = '🔍 Search disaster info...';
            searchInput.style.cssText = `
                padding: 1rem 2rem;
                border: 1px solid rgba(255,255,255,0.3);
                border-radius: 25px;
                background: rgba(0,0,0,0.8);
                backdrop-filter: blur(20px);
                color: white;
                font-size: 1rem;
                width: 400px;
                outline: none;
            `;
            
            searchInput.addEventListener('focus', () => {
                searchInput.style.borderColor = '#00d4ff';
                searchInput.style.boxShadow = '0 0 20px rgba(0,212,255,0.3)';
            });
            
            searchContainer.appendChild(searchInput);
            document.body.appendChild(searchContainer);
            
            // Toggle search with Ctrl+K
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === 'k') {
                    e.preventDefault();
                    searchContainer.style.display = searchContainer.style.display === 'none' ? 'block' : 'none';
                    if (searchContainer.style.display === 'block') {
                        searchInput.focus();
                    }
                }
                if (e.key === 'Escape') {
                    searchContainer.style.display = 'none';
                }
            });
        }

        addSearchFeature();

        // Add sound effects (optional)
        function playSound(type) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            const frequencies = {
                alert: 800,
                success: 600,
                click: 400
            };
            
            oscillator.frequency.setValueAtTime(frequencies[type] || 400, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }

        // Add sound to buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => playSound('click'));
        });

        // Weather integration simulation
        function updateWeatherInfo() {
            const weatherInfo = document.createElement('div');
            weatherInfo.style.cssText = `
                position: fixed;
                top: 20px;
                right: 150px;
                background: rgba(0,0,0,0.7);
                backdrop-filter: blur(10px);
                padding: 0.5rem 1rem;
                border-radius: 10px;
                color: white;
                font-size: 0.9rem;
                border: 1px solid rgba(255,255,255,0.1);
                animation: fadeIn 1s ease;
            `;
            
            const temp = Math.floor(Math.random() * 15 + 25); // 25-40°C
            const condition = ['Partly Cloudy', 'Clear', 'Overcast', 'Light Rain'][Math.floor(Math.random() * 4)];
            
            weatherInfo.innerHTML = `🌡 ${temp}°C | ${condition} | Phagwara, PB`;
            document.body.appendChild(weatherInfo);
        }

        updateWeatherInfo();

        console.log('🚀 DPHub loaded successfully!');
        console.log('💡 Press Ctrl+K to search');
        console.log('🔊 Sound effects enabled');
        // Any existing code you already wrote
// ============================
// Forgot Password + Register
// ============================

// Open & Close Modals
function openForgotPassword() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("forgotPasswordModal").style.display = "block";
}

function closeForgotPassword() {
  document.getElementById("forgotPasswordModal").style.display = "none";
}

function openRegister() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("registerModal").style.display = "block";
}

function closeRegister() {
  document.getElementById("registerModal").style.display = "none";
}

// Example form handlers
document.getElementById("forgotPasswordForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const resetEmail = document.getElementById("resetEmail").value;
  alert("Password reset link sent to: " + resetEmail);
  closeForgotPassword();
});

document.getElementById("registerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value

// ✅ Add this block at the end of ra.js
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const alertsList = document.getElementById("alerts-list");

  // Register User
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      console.error("Register error:", err);
    }
  });

// Login User
//   loginForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     try {
//       const res = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       alert(data.message || data.error);
//     } catch (err) {
//       console.error("Login error:", err);
//     }
//   });

  // Fetch Alerts
  fetch("http://localhost:5000/api/alerts")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((alert) => {
        const li = document.createElement("li");
        li.textContent = `${alert.type} alert in ${alert.region}`;
        alertsList.appendChild(li);
      });
    })
    .catch((err) => console.error("Error fetching alerts:", err));
  });
// ============================
// Drill Modal Functions
// ============================
function openDrill(title, details) {
  document.getElementById("drillTitle").textContent = title;
  document.getElementById("drillDetails").textContent = details;
  document.getElementById("drillModal").style.display = "block";
}

function closeDrill() {
  document.getElementById("drillModal").style.display = "none";

  // Stop video when modal closes
  const drillVideo = document.getElementById("drillVideo");
  if (drillVideo) {
    drillVideo.src = ""; // reset src to stop playback
  }

  // Reset UI
  document.getElementById("drillVideoContainer").style.display = "none";
  document.getElementById("startDrillBtn").style.display = "block";
}

// ============================
// Drill Video Embed
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const startDrillBtn = document.getElementById("startDrillBtn");
  const drillVideoContainer = document.getElementById("drillVideoContainer");
  const drillVideo = document.getElementById("drillVideo");

  if (startDrillBtn) {
    startDrillBtn.addEventListener("click", () => {
      // Example YouTube video
      drillVideo.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

      // Show video container
      drillVideoContainer.style.display = "block";

      // Hide the button once video starts
      startDrillBtn.style.display = "none";
    });
  }
});
})
function selectRole(role) {
  document.getElementById("roleSelection").style.display = "none";
  document.getElementById("loginFormContainer").style.display = "block";
  document.getElementById("loginHeader").innerText =
    role === "teacher" ? "👨‍🏫 Teacher Login" : "👩‍🎓 Student Login";
}

function goBackToRole() {
  document.getElementById("loginFormContainer").style.display = "none";
  document.getElementById("roleSelection").style.display = "block";
}
