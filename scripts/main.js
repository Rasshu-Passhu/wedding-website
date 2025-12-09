// Wedding Website JavaScript

// Calendar Integration - Add All Events
function addAllEventsToCalendar() {
    // Create calendar options modal for all events
    const modal = document.createElement('div');
    modal.className = 'calendar-modal';
    modal.innerHTML = `
        <div class="calendar-modal-content">
            <div class="calendar-modal-header">
                <h3><i class="far fa-calendar-plus"></i> Add All Wedding Events</h3>
                <button class="close-modal" onclick="this.closest('.calendar-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="calendar-modal-body">
                <h4>Rashmi & Yash - Complete Wedding Schedule</h4>
                
                <div class="event-list">
                    <div class="event-item">
                        <div class="event-icon">
                            <i class="fas fa-sun"></i>
                        </div>
                        <div class="event-details">
                            <h5>Haldi Ceremony</h5>
                            <p>February 6, 2026 at 10:00 AM</p>
                        </div>
                    </div>
                    <div class="event-item">
                        <div class="event-icon">
                            <i class="fas fa-music"></i>
                        </div>
                        <div class="event-details">
                            <h5>Sangeet Night</h5>
                            <p>February 6, 2026 at 5:00 PM</p>
                        </div>
                    </div>
                    <div class="event-item">
                        <div class="event-icon">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="event-details">
                            <h5>Wedding Ceremony</h5>
                            <p>February 7, 2026 at 11:30 AM</p>
                        </div>
                    </div>
                    <div class="event-item">
                        <div class="event-icon">
                            <i class="fas fa-champagne-glasses"></i>
                        </div>
                        <div class="event-details">
                            <h5>Reception</h5>
                            <p>February 7, 2026 at 6:00 PM</p>
                        </div>
                    </div>
                </div>

                <p class="venue-text"><i class="fas fa-map-marker-alt"></i> The Grand Rudraksh, Amravati, Maharashtra</p>
                
                <div class="calendar-options">
                    <button class="btn btn-calendar-option" onclick="addAllGoogleCalendar()">
                        <i class="fab fa-google"></i> Google Calendar
                    </button>
                    <button class="btn btn-calendar-option" onclick="addAllOutlookCalendar()">
                        <i class="fab fa-microsoft"></i> Outlook
                    </button>
                    <button class="btn btn-calendar-option" onclick="addAllICSCalendar()">
                        <i class="far fa-calendar"></i> Download ICS
                    </button>
                </div>

                <div class="reminder-section">
                    <h5><i class="fas fa-bell"></i> Automatic Reminders for All Events</h5>
                    <div class="reminder-list">
                        <div class="reminder-item">
                            <i class="fas fa-calendar-day"></i>
                            <span>1 month before</span>
                        </div>
                        <div class="reminder-item">
                            <i class="fas fa-calendar-week"></i>
                            <span>1 week before</span>
                        </div>
                        <div class="reminder-item">
                            <i class="fas fa-calendar-alt"></i>
                            <span>1 day before</span>
                        </div>
                        <div class="reminder-item">
                            <i class="fas fa-clock"></i>
                            <span>2 hours before</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function addAllGoogleCalendar() {
    const events = [
        {
            title: "Rashmi & Yash - Haldi Ceremony",
            date: "20260206T100000Z",
            endDate: "20260206T120000Z",
            description: "Join us for the traditional Haldi ceremony as we begin our wedding celebrations!"
        },
        {
            title: "Rashmi & Yash - Sangeet Night", 
            date: "20260206T170000Z",
            endDate: "20260206T220000Z",
            description: "An evening of music, dance, and celebration! Come ready to dance the night away."
        },
        {
            title: "Rashmi & Yash - Wedding Ceremony",
            date: "20260207T113000Z",
            endDate: "20260207T143000Z",
            description: "The main event! Join us as we exchange vows and begin our journey as husband and wife."
        },
        {
            title: "Rashmi & Yash - Reception",
            date: "20260207T180000Z", 
            endDate: "20260207T230000Z",
            description: "Celebrate with us at our wedding reception with dinner, dancing, and lots of joy!"
        }
    ];

    const location = "The Grand Rudraksh, Amravati, Maharashtra";
    
    // Open multiple Google Calendar tabs for all events
    events.forEach((event, index) => {
        setTimeout(() => {
            const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date}/${event.endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(location)}`;
            window.open(googleUrl, '_blank');
        }, index * 1000);
    });
    
    document.querySelector('.calendar-modal').remove();
}

function addAllOutlookCalendar() {
    const events = [
        {
            title: "Rashmi & Yash - Haldi Ceremony",
            startDate: "2026-02-06T10:00:00.000Z",
            endDate: "2026-02-06T12:00:00.000Z",
            description: "Join us for the traditional Haldi ceremony as we begin our wedding celebrations!"
        },
        {
            title: "Rashmi & Yash - Sangeet Night",
            startDate: "2026-02-06T17:00:00.000Z", 
            endDate: "2026-02-06T22:00:00.000Z",
            description: "An evening of music, dance, and celebration! Come ready to dance the night away."
        },
        {
            title: "Rashmi & Yash - Wedding Ceremony",
            startDate: "2026-02-07T11:30:00.000Z",
            endDate: "2026-02-07T14:30:00.000Z",
            description: "The main event! Join us as we exchange vows and begin our journey as husband and wife."
        },
        {
            title: "Rashmi & Yash - Reception",
            startDate: "2026-02-07T18:00:00.000Z",
            endDate: "2026-02-07T23:00:00.000Z", 
            description: "Celebrate with us at our wedding reception with dinner, dancing, and lots of joy!"
        }
    ];

    const location = "The Grand Rudraksh, Amravati, Maharashtra";
    
    // Open multiple Outlook Calendar tabs for all events
    events.forEach((event, index) => {
        setTimeout(() => {
            const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${event.startDate}&enddt=${event.endDate}&body=${encodeURIComponent(event.description)}&location=${encodeURIComponent(location)}`;
            window.open(outlookUrl, '_blank');
        }, index * 1000);
    });
    
    document.querySelector('.calendar-modal').remove();
}

function addAllICSCalendar() {
    const location = "The Grand Rudraksh, Amravati, Maharashtra";
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rashmi & Yash Wedding//EN
BEGIN:VEVENT
UID:haldi-${Date.now()}@rashmi-yash-wedding.com
DTSTART:20260206T100000Z
DTEND:20260206T120000Z
SUMMARY:Rashmi & Yash - Haldi Ceremony
DESCRIPTION:Join us for the traditional Haldi ceremony as we begin our wedding celebrations!
LOCATION:${location}
BEGIN:VALARM
TRIGGER:-P30D
DESCRIPTION:Haldi Ceremony - 1 month reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-P7D
DESCRIPTION:Haldi Ceremony - 1 week reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-P1D
DESCRIPTION:Haldi Ceremony - 1 day reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-PT2H
DESCRIPTION:Haldi Ceremony - 2 hours reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
BEGIN:VEVENT
UID:sangeet-${Date.now()}@rashmi-yash-wedding.com
DTSTART:20260206T170000Z
DTEND:20260206T220000Z
SUMMARY:Rashmi & Yash - Sangeet Night
DESCRIPTION:An evening of music, dance, and celebration! Come ready to dance the night away.
LOCATION:${location}
BEGIN:VALARM
TRIGGER:-P30D
DESCRIPTION:Sangeet Night - 1 month reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-P7D
DESCRIPTION:Sangeet Night - 1 week reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-P1D
DESCRIPTION:Sangeet Night - 1 day reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-PT2H
DESCRIPTION:Sangeet Night - 2 hours reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
BEGIN:VEVENT
UID:wedding-${Date.now()}@rashmi-yash-wedding.com
DTSTART:20260207T113000Z
DTEND:20260207T143000Z
SUMMARY:Rashmi & Yash - Wedding Ceremony
DESCRIPTION:The main event! Join us as we exchange vows and begin our journey as husband and wife.
LOCATION:${location}
BEGIN:VALARM
TRIGGER:-P30D
DESCRIPTION:Wedding Ceremony - 1 month reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-P7D
DESCRIPTION:Wedding Ceremony - 1 week reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-P1D
DESCRIPTION:Wedding Ceremony - 1 day reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-PT2H
DESCRIPTION:Wedding Ceremony - 2 hours reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
BEGIN:VEVENT
UID:reception-${Date.now()}@rashmi-yash-wedding.com
DTSTART:20260207T180000Z
DTEND:20260207T230000Z
SUMMARY:Rashmi & Yash - Reception
DESCRIPTION:Celebrate with us at our wedding reception with dinner, dancing, and lots of joy!
LOCATION:${location}
BEGIN:VALARM
TRIGGER:-P30D
DESCRIPTION:Reception - 1 month reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-P7D
DESCRIPTION:Reception - 1 week reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-P1D
DESCRIPTION:Reception - 1 day reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
TRIGGER:-PT2H
DESCRIPTION:Reception - 2 hours reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rashmi-yash-all-wedding-events.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    document.querySelector('.calendar-modal').remove();
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    // Initialize critical functionality first
    initMobileNavigation();
    initSmoothScrolling();
    
    // Defer heavy operations to reduce initial load lag
    setTimeout(() => {
        initCountdown();
    }, 100);
    
    setTimeout(() => {
        initScrollAnimations();
    }, 200);
    
    setTimeout(() => {
        initRSVPForm();
        initGallery();
    }, 300);
    
    setTimeout(() => {
        initMusicPlayer();
        initPhotoUpload();
    }, 500);
}

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Countdown Timer
function initCountdown() {
    const weddingDate = new Date('2026-02-07T11:30:00').getTime();
    
    console.log('Wedding date timestamp:', weddingDate);
    console.log('Wedding date readable:', new Date(weddingDate));
    console.log('Current date:', new Date());
    
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    console.log('Countdown elements found:', {
        days: !!daysElement,
        hours: !!hoursElement,
        minutes: !!minutesElement,
        seconds: !!secondsElement
    });
    
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        console.error('Some countdown elements not found!');
        return;
    }
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        console.log('Current timestamp:', now);
        console.log('Distance to wedding:', distance);
        console.log('Distance in days:', distance / (1000 * 60 * 60 * 24));

        if (distance < 0) {
            console.log('Wedding has passed - showing married message');
            document.getElementById('countdown').innerHTML = 
                '<div class="countdown-item"><span class="countdown-number">🎉</span><span class="countdown-label">Married!</span></div>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        console.log('Calculated countdown:', { days, hours, minutes, seconds });

        // Only update if values changed to reduce DOM manipulation
        if (daysElement.textContent !== days.toString().padStart(2, '0')) {
            daysElement.textContent = days.toString().padStart(2, '0');
            console.log('Updated days to:', days);
        }
        if (hoursElement.textContent !== hours.toString().padStart(2, '0')) {
            hoursElement.textContent = hours.toString().padStart(2, '0');
            console.log('Updated hours to:', hours);
        }
        if (minutesElement.textContent !== minutes.toString().padStart(2, '0')) {
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            console.log('Updated minutes to:', minutes);
        }
        if (secondsElement.textContent !== seconds.toString().padStart(2, '0')) {
            secondsElement.textContent = seconds.toString().padStart(2, '0');
            console.log('Updated seconds to:', seconds);
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Stop observing once animated to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.story-card, .detail-card, .gallery-item, .registry-item');
    animateElements.forEach(element => {
        element.classList.add('scroll-animation');
        observer.observe(element);
    });

    // Throttle scroll event for navbar
    let ticking = false;
    const updateNavbar = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    };

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// RSVP Form Handling with Google Sheets Integration
function initRSVPForm() {
    const rsvpForm = document.getElementById('rsvpForm');
    const attendanceYes = document.getElementById('attendanceYes');
    const attendanceNo = document.getElementById('attendanceNo');
    const conditionalFields = document.getElementById('conditionalFields');
    const sideInputs = document.querySelectorAll('input[name="side"]');
    const guestsSelect = document.getElementById('guests');
    
    if (rsvpForm) {
        // Handle attendance selection to show/hide conditional fields
        const handleAttendanceChange = () => {
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            
            if (attendanceYes.checked) {
                conditionalFields.style.display = 'block';
                // Make conditional fields required
                emailInput.setAttribute('required', 'true');
                phoneInput.setAttribute('required', 'true');
                sideInputs.forEach(input => input.setAttribute('required', 'true'));
                guestsSelect.setAttribute('required', 'true');
            } else if (attendanceNo.checked) {
                conditionalFields.style.display = 'none';
                // Remove required attribute from conditional fields
                emailInput.removeAttribute('required');
                emailInput.value = ''; // Clear value
                phoneInput.removeAttribute('required');
                phoneInput.value = ''; // Clear value
                sideInputs.forEach(input => {
                    input.removeAttribute('required');
                    input.checked = false; // Clear selection
                });
                guestsSelect.removeAttribute('required');
                guestsSelect.value = ''; // Clear selection
            }
        };
        
        // Add event listeners for attendance radio buttons
        attendanceYes.addEventListener('change', handleAttendanceChange);
        attendanceNo.addEventListener('change', handleAttendanceChange);
        
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const rsvpData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                attendance: formData.get('attendance'),
                side: formData.get('side'),
                guests: formData.get('guests'),
                message: formData.get('message')
            };
            
            // Basic validation
            if (!rsvpData.name || !rsvpData.attendance) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Conditional validation - only check if attending
            if (rsvpData.attendance === 'yes') {
                if (!rsvpData.email || !rsvpData.phone || !rsvpData.side || !rsvpData.guests) {
                    showMessage('Please fill in all required fields for attendance.', 'error');
                    return;
                }
                
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(rsvpData.email)) {
                    showMessage('Please enter a valid email address.', 'error');
                    return;
                }
                
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                const cleanPhone = rsvpData.phone.replace(/[\s\-\(\)]/g, '');
                if (cleanPhone.length < 10) {
                    showMessage('Please enter a valid phone number.', 'error');
                    return;
                }
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Submit to Google Sheets via Formspree
            submitToGoogleSheets(rsvpData)
                .then((result) => {
                    console.log('RSVP submitted successfully to Formspree:', result);
                    if (rsvpData.attendance === 'yes') {
                        showMessage('Thank you for your RSVP! We can\'t wait to celebrate with you! ✨', 'success');
                    } else {
                        showMessage('Thank you for your RSVP. We\'ll miss you at our celebration! 💕', 'success');
                    }
                    rsvpForm.reset();
                    conditionalFields.style.display = 'none'; // Hide conditional fields after reset
                })
                .catch((error) => {
                    console.error('Formspree submission failed:', error);
                    // Fallback: Save locally and show message
                    saveRSVPLocally(rsvpData);
                    if (rsvpData.attendance === 'yes') {
                        showMessage('Thank you for your RSVP! We have received your response. 💕 (Saved locally)', 'success');
                    } else {
                        showMessage('Thank you for your RSVP. We have received your response. 💕 (Saved locally)', 'success');
                    }
                    rsvpForm.reset();
                    conditionalFields.style.display = 'none'; // Hide conditional fields after reset
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
}

// Submit RSVP to Google Sheets
async function submitToGoogleSheets(rsvpData) {
    try {
        console.log('Submitting RSVP data to Google Sheets:', rsvpData);
        
        // Create a form to submit the data (avoids CORS issues)
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://script.google.com/macros/s/AKfycbyQRjQPovoZKkzv0QCy1v_jXz4RdCjwoGgdlj18YjRrPWVQUsrIhRbe_F84o20hmkdYyw/exec';
        form.style.display = 'none';
        
        // Add form fields
        const fields = {
            name: rsvpData.name || '',
            email: rsvpData.email || '',
            phone: rsvpData.phone || '',
            attendance: rsvpData.attendance === 'yes' ? 'Joyfully accepts' : 'Regretfully declines',
            side: rsvpData.side === 'groom' ? 'Yash\'s side' : (rsvpData.side === 'bride' ? 'Rashmi\'s side' : ''),
            guests: rsvpData.guests || '',
            message: rsvpData.message || ''
        };
        
        console.log('Form data being submitted:', fields);
        
        Object.keys(fields).forEach(key => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = fields[key];
            form.appendChild(input);
        });
        
        document.body.appendChild(form);
        
        // Create a promise to handle the submission
        return new Promise((resolve, reject) => {
            // Create an iframe to handle the response
            const iframe = document.createElement('iframe');
            iframe.name = 'response_frame';
            iframe.style.display = 'none';
            form.target = 'response_frame';
            
            document.body.appendChild(iframe);
            
            // Handle the response
            iframe.onload = function() {
                try {
                    console.log('Form submitted successfully to Google Sheets');
                    document.body.removeChild(form);
                    document.body.removeChild(iframe);
                    resolve({ status: 'success', message: 'RSVP submitted successfully!' });
                } catch (error) {
                    console.error('Error handling response:', error);
                    document.body.removeChild(form);
                    document.body.removeChild(iframe);
                    resolve({ status: 'success', message: 'RSVP submitted successfully!' }); // Assume success
                }
            };
            
            iframe.onerror = function() {
                console.error('Error submitting form');
                document.body.removeChild(form);
                document.body.removeChild(iframe);
                reject(new Error('Failed to submit form'));
            };
            
            // Submit the form
            form.submit();
        });
    } catch (error) {
        console.error('Google Sheets submission error:', error);
        throw error;
    }
}

// Fallback: Save RSVP locally (for testing)
function saveRSVPLocally(rsvpData) {
    const timestamp = new Date().toLocaleString();
    const rsvps = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
    
    rsvps.push({
        ...rsvpData,
        timestamp,
        attendanceText: rsvpData.attendance === 'yes' ? 'Joyfully accepts ✨' : 'Regretfully declines 💔'
    });
    
    localStorage.setItem('weddingRSVPs', JSON.stringify(rsvps));
    console.log('RSVP saved locally:', rsvpData);
    
    // Also log for easy copying to Excel
    console.log('=== RSVP DATA FOR EXCEL ===');
    console.log(`Name: ${rsvpData.name}`);
    console.log(`Email: ${rsvpData.email}`);
    console.log(`Phone: ${rsvpData.phone}`);
    console.log(`Side: ${rsvpData.side === 'groom' ? 'Groom\'s side (Yash)' : 'Bride\'s side (Rashmi)'}`);
    console.log(`Guests: ${rsvpData.guests}`);
    console.log(`Attendance: ${rsvpData.attendance === 'yes' ? 'Joyfully accepts ✨' : 'Regretfully declines 💔'}`);
    console.log(`Message: ${rsvpData.message || 'No message'}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log('=========================');
}

// Gallery Functionality
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Preload gallery images for better performance
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
        // Remove lazy loading for gallery section
        img.removeAttribute('loading');
        
        // Preload images when gallery section is near viewport
        const preloadImg = new Image();
        preloadImg.src = img.src;
    });
    
    // Optimize gallery interactions
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Create intersection observer for gallery performance
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                // Stop observing once loaded
                galleryObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '50px 0px', // Start loading 50px before it comes into view
        threshold: 0.1
    });
    
    // Observe all gallery items
    galleryItems.forEach(item => {
        galleryObserver.observe(item);
    });
}

// Simple Music Player
function initMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    
    if (!musicToggle || !backgroundMusic) return;
    
    let isPlaying = false;
    backgroundMusic.volume = 0.3;
    
    // Update UI based on play state
    const updateUI = () => {
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
        } else {
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
        }
    };
    
    // Listen for audio events
    backgroundMusic.addEventListener('play', () => {
        isPlaying = true;
        updateUI();
    });
    
    backgroundMusic.addEventListener('pause', () => {
        isPlaying = false;
        updateUI();
    });
    
    backgroundMusic.addEventListener('ended', () => {
        isPlaying = false;
        updateUI();
    });
    
    // Manual music toggle - only way to start/stop music
    musicToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (isPlaying) {
            // User wants to pause
            backgroundMusic.pause();
            console.log('Music paused by user');
        } else {
            // User wants to play
            backgroundMusic.play().then(() => {
                console.log('Music started via button click');
            }).catch((error) => {
                console.error('Failed to start music:', error);
                showMessage('Unable to play music. Please try refreshing the page.', 'error');
            });
        }
    });
    
    // Initialize UI - music is stopped by default
    updateUI();
}

// Photo Upload Functionality  
function initPhotoUpload() {
    // Simple redirect to Google Photos album
    // Users will upload directly to the shared album
    console.log('Photo upload redirects to Google Photos album');
}

// Utility function to show messages
function showMessage(message, type = 'info') {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.style.cssText = `
        position: fixed;
        top: 90px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'error' ? '#e74c3c' : '#27ae60'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.3s ease;
        font-weight: 500;
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 5000);
}
