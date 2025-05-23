async function track() {
    try {
      document.getElementById('submit_wpcargo').value = 'Wait'
      const trackInput = document.getElementById('trackingcode').value;
  
      if (trackInput === '') {
        return alert ('Tracking Number Requred!!')
      }
  
      console.log(trackInput);
  
      const url = 'https://slada.onrender.com/admin/id-info/';
      const data = {
        trackNumber: trackInput,
      };
  
      // console.log(JSON.stringify(data));
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Access-Control-Allow-Origin-": "no-cors",
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
  
      const doc = await response.json();
  
      console.log(doc);
  
      if (response.status !== 200) {
        document.getElementById('submit_wpcargo').value = 'Refresh'
        return alert(doc.message);
      }
  
    //   document.getElementById('submit_wpcargo').value = 'TRACK RESULT'
      sessionStorage.setItem('doc', JSON.stringify(doc));
      document.location.href = '/track.html';
    } catch (error) {
      document.getElementById('submit_wpcargo').value = 'Refresh'
      console.log(error);
    }
  };
  