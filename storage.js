class Storage {
  constructor() {
    this.city;
  }

  get_location_data() {
    if(localStorage.getItem('city') === null) {
      // Set the default city
      this.city = "kigali";
    } else {
      // Set the city saved in localstorage
      this.city = localStorage.getItem('city');
    }

    return {
      city: this.city,
    }
  }

  set_location_data(city) {
    // Save in localstorage
    localStorage.setItem('city', city);
  }
}