// Function to remove the target element
function removeUpworkAnnouncements() {
  // Select the element using the provided attributes
  const announcementDiv = document.querySelector('div[data-v-4788987a][data-test="announcements"].announcements.mb-6x.d-none.d-lg-block');
  
  if (announcementDiv) {
    announcementDiv.remove();
    console.log('Upwork announcement removed successfully!');
  }
}

// Run the function when the page is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeUpworkAnnouncements);
} else {
  removeUpworkAnnouncements();
}

// Also observe for dynamic content changes
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length) {
      removeUpworkAnnouncements();
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});