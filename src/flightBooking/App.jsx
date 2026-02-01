import React, { useState } from "react";
import {
  Search,
  Calendar,
  Users,
  Plane,
  Clock,
  ArrowRight,
  ChevronDown,
  Filter,
  Star,
  Briefcase,
} from "lucide-react";
import "./App.css";

export default function FlightBooking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
    tripType: "one-way",
    class: "economy",
  });
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [sortBy, setSortBy] = useState("price-low");
  const [filterClass, setFilterClass] = useState("all");
  const [passengerDetails, setPassengerDetails] = useState([
    { firstName: "", lastName: "", email: "", phone: "" },
  ]);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  // Real world cities and airports
  const cities = [
    { code: "LHR", city: "London", country: "United Kingdom" },
    { code: "JFK", city: "New York", country: "United States" },
    { code: "LAX", city: "Los Angeles", country: "United States" },
    { code: "CDG", city: "Paris", country: "France" },
    { code: "DXB", city: "Dubai", country: "United Arab Emirates" },
    { code: "NRT", city: "Tokyo", country: "Japan" },
    { code: "SYD", city: "Sydney", country: "Australia" },
    { code: "SIN", city: "Singapore", country: "Singapore" },
    { code: "HKG", city: "Hong Kong", country: "Hong Kong" },
    { code: "BKK", city: "Bangkok", country: "Thailand" },
    { code: "FRA", city: "Frankfurt", country: "Germany" },
    { code: "AMS", city: "Amsterdam", country: "Netherlands" },
    { code: "ICN", city: "Seoul", country: "South Korea" },
    { code: "DEL", city: "New Delhi", country: "India" },
    { code: "BOM", city: "Mumbai", country: "India" },
    { code: "IST", city: "Istanbul", country: "Turkey" },
    { code: "MAD", city: "Madrid", country: "Spain" },
    { code: "BCN", city: "Barcelona", country: "Spain" },
    { code: "FCO", city: "Rome", country: "Italy" },
    { code: "MXP", city: "Milan", country: "Italy" },
    { code: "YYZ", city: "Toronto", country: "Canada" },
    { code: "YVR", city: "Vancouver", country: "Canada" },
    { code: "MEX", city: "Mexico City", country: "Mexico" },
    { code: "GRU", city: "São Paulo", country: "Brazil" },
    { code: "GIG", city: "Rio de Janeiro", country: "Brazil" },
    { code: "JNB", city: "Johannesburg", country: "South Africa" },
    { code: "CAI", city: "Cairo", country: "Egypt" },
    { code: "SVO", city: "Moscow", country: "Russia" },
    { code: "PEK", city: "Beijing", country: "China" },
    { code: "PVG", city: "Shanghai", country: "China" },
    { code: "MIA", city: "Miami", country: "United States" },
    { code: "SFO", city: "San Francisco", country: "United States" },
    { code: "ORD", city: "Chicago", country: "United States" },
    { code: "DFW", city: "Dallas", country: "United States" },
    { code: "SEA", city: "Seattle", country: "United States" },
    { code: "ATL", city: "Atlanta", country: "United States" },
    { code: "BOS", city: "Boston", country: "United States" },
    { code: "LAS", city: "Las Vegas", country: "United States" },
    { code: "MCO", city: "Orlando", country: "United States" },
    { code: "DEN", city: "Denver", country: "United States" },
  ];

  // Generate flights based on selected cities
  const generateFlights = () => {
    if (!formData.from || !formData.to) return [];

    const airlines = [
      { name: "AMERICAN AIRLINES", code: "AA", logo: "AA", rating: 4.5 },
      { name: "BRITISH AIRWAYS", code: "BA", logo: "BA", rating: 4.7 },
      { name: "UNITED AIRLINES", code: "UA", logo: "UA", rating: 4.3 },
      { name: "DELTA AIR LINES", code: "DL", logo: "DL", rating: 4.6 },
      { name: "EMIRATES", code: "EK", logo: "EK", rating: 4.9 },
      { name: "LUFTHANSA", code: "LH", logo: "LH", rating: 4.5 },
      { name: "AIR FRANCE", code: "AF", logo: "AF", rating: 4.4 },
      { name: "SINGAPORE AIRLINES", code: "SQ", logo: "SQ", rating: 4.8 },
      { name: "CATHAY PACIFIC", code: "CX", logo: "CX", rating: 4.6 },
      { name: "QANTAS", code: "QF", logo: "QF", rating: 4.5 },
      { name: "ETIHAD AIRWAYS", code: "EY", logo: "EY", rating: 4.7 },
      { name: "TURKISH AIRLINES", code: "TK", logo: "TK", rating: 4.4 },
      { name: "AIR CANADA", code: "AC", logo: "AC", rating: 4.3 },
      { name: "KLM", code: "KL", logo: "KL", rating: 4.5 },
      { name: "SWISS", code: "LX", logo: "LX", rating: 4.6 },
    ];

    const fromCity = formData.from.split(" (")[0];
    const toCity = formData.to.split(" (")[0];

    const generatedFlights = [];
    const numFlights = 8;

    for (let i = 0; i < numFlights; i++) {
      const airline = airlines[i % airlines.length];
      const basePrice = 200 + Math.random() * 600;
      const hours = 2 + Math.floor(Math.random() * 14);
      const minutes = Math.floor(Math.random() * 60);
      const stops = Math.random() > 0.3 ? 1 : Math.random() > 0.7 ? 2 : 0;

      const departHour = 6 + Math.floor(Math.random() * 16);
      const departMin = Math.floor(Math.random() * 4) * 15;
      const arriveHour = (departHour + hours) % 24;
      const arriveMin = (departMin + minutes) % 60;

      const formatTime = (hour, min) => {
        const period = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 || 12;
        return `${String(hour12).padStart(2, "0")}:${String(min).padStart(2, "0")} ${period}`;
      };

      const seatsLeft = 5 + Math.floor(Math.random() * 20);

      generatedFlights.push({
        id: i + 1,
        airline: airline.name,
        code: `${airline.code}${100 + i}`,
        logo: airline.logo,
        departure: formatTime(departHour, departMin),
        arrival: formatTime(arriveHour, arriveMin),
        departureCity: fromCity,
        arrivalCity: toCity,
        duration: `${hours}h ${minutes}m`,
        stops: stops,
        price: Math.round(basePrice * 100) / 100,
        class: formData.class.charAt(0).toUpperCase() + formData.class.slice(1),
        features: [
          "Free meals",
          "In-flight entertainment",
          `${seatsLeft} seats left`,
          stops === 0 ? "Direct flight" : "",
        ].filter(Boolean),
        baggage:
          formData.class === "economy"
            ? "23kg"
            : formData.class === "business"
              ? "32kg"
              : "40kg",
        rating: airline.rating,
      });
    }

    return generatedFlights;
  };

  const flights = generateFlights();

  const sortedFlights = [...flights].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "duration")
      return parseFloat(a.duration) - parseFloat(b.duration);
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const filteredFlights = sortedFlights.filter(
    (flight) =>
      filterClass === "all" || flight.class.toLowerCase() === filterClass,
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (formData.from && formData.to && formData.date) {
      setStep(2);
    }
  };

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
    setStep(3);
  };

  const handleAddPassenger = () => {
    setPassengerDetails([
      ...passengerDetails,
      { firstName: "", lastName: "", email: "", phone: "" },
    ]);
  };

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengerDetails];
    updated[index][field] = value;
    setPassengerDetails(updated);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Validate payment details
    if (
      !paymentDetails.cardNumber ||
      !paymentDetails.cardName ||
      !paymentDetails.expiryDate ||
      !paymentDetails.cvv
    ) {
      alert("Please fill in all payment details!");
      return;
    }

    // Show success alert
    alert(
      "✅ Payment Successful! Your booking has been confirmed.\n\n" +
        `Flight: ${selectedFlight.airline} ${selectedFlight.code}\n` +
        `Route: ${formData.from} → ${formData.to}\n` +
        `Total Amount: $${(selectedFlight.price * formData.passengers).toFixed(2)}\n\n` +
        "Thank you for booking with C-MoreFly!",
    );

    // Move to confirmation step
    setStep(4);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="glass-strong header">
        <div className="header-content">
          <div className="logo-container">
            <Plane className="logo-icon" size={24} color="white" />
          </div>
          <div>
            <h1 className="title heading-font">C-MoreFly</h1>
            <p className="subtitle">Book your perfect flight</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Step Indicator */}
        <div className="step-indicator">
          <div className={`step-item ${step >= 1 ? "active" : ""}`}>
            <div className="step-number">1</div>
            <span className="step-text">Search Flights</span>
          </div>
          <div className={`step-item ${step >= 2 ? "active" : ""}`}>
            <div className="step-number">2</div>
            <span className="step-text">Select Flight</span>
          </div>
          <div className={`step-item ${step >= 3 ? "active" : ""}`}>
            <div className="step-number">3</div>
            <span className="step-text">Passenger Details</span>
          </div>
          <div className={`step-item ${step >= 4 ? "active" : ""}`}>
            <div className="step-number">4</div>
            <span className="step-text">Confirmation</span>
          </div>
        </div>

        {/* Step 1: Search Form */}
        {step === 1 && (
          <div className="search-container">
            <div className="glass-strong search-card">
              <h2 className="search-title heading-font gradient-text">
                Where would you like to go?
              </h2>

              <div className="trip-type-container">
                <button
                  className={`trip-type-button ${formData.tripType === "one-way" ? "active" : ""}`}
                  onClick={() =>
                    setFormData({ ...formData, tripType: "one-way" })
                  }
                >
                  One Way
                </button>
                <button
                  className={`trip-type-button ${formData.tripType === "round-trip" ? "active" : ""}`}
                  onClick={() =>
                    setFormData({ ...formData, tripType: "round-trip" })
                  }
                >
                  Round Trip
                </button>
                <button
                  className={`trip-type-button ${formData.tripType === "multi-city" ? "active" : ""}`}
                  onClick={() =>
                    setFormData({ ...formData, tripType: "multi-city" })
                  }
                >
                  Multi City
                </button>
              </div>

              <form onSubmit={handleSearch}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">
                      <Search
                        size={16}
                        style={{ display: "inline", marginRight: "8px" }}
                      />
                      From
                    </label>
                    <select
                      className="form-select"
                      value={formData.from}
                      onChange={(e) =>
                        setFormData({ ...formData, from: e.target.value })
                      }
                      required
                    >
                      <option value="">Select departure city</option>
                      {cities.map((city) => (
                        <option
                          key={city.code}
                          value={`${city.city} (${city.code})`}
                        >
                          {city.city} ({city.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Search
                        size={16}
                        style={{ display: "inline", marginRight: "8px" }}
                      />
                      To
                    </label>
                    <select
                      className="form-select"
                      value={formData.to}
                      onChange={(e) =>
                        setFormData({ ...formData, to: e.target.value })
                      }
                      required
                    >
                      <option value="">Select destination</option>
                      {cities.map((city) => (
                        <option
                          key={city.code}
                          value={`${city.city} (${city.code})`}
                        >
                          {city.city} ({city.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Calendar
                        size={16}
                        style={{ display: "inline", marginRight: "8px" }}
                      />
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-input"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Users
                        size={16}
                        style={{ display: "inline", marginRight: "8px" }}
                      />
                      Passengers
                    </label>
                    <input
                      type="number"
                      className="form-input"
                      min="1"
                      max="9"
                      value={formData.passengers}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          passengers: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Briefcase
                        size={16}
                        style={{ display: "inline", marginRight: "8px" }}
                      />
                      Class
                    </label>
                    <select
                      className="form-select"
                      value={formData.class}
                      onChange={(e) =>
                        setFormData({ ...formData, class: e.target.value })
                      }
                    >
                      <option value="economy">Economy</option>
                      <option value="business">Business</option>
                      <option value="first">First Class</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-primary search-button">
                  <Search
                    size={20}
                    style={{ display: "inline", marginRight: "8px" }}
                  />
                  Search Flights
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Step 2: Flight Results */}
        {step === 2 && (
          <div className="results-container">
            <div className="glass-strong search-card">
              <button onClick={() => setStep(1)} className="back-button">
                ← Back to Search
              </button>
              <h2 className="results-title heading-font">Available Flights</h2>
              <p className="results-subtitle">
                {formData.from} → {formData.to} on {formData.date}
              </p>

              <div className="filters-container">
                <div className="filter-group">
                  <label className="form-label">
                    <Filter
                      size={16}
                      style={{ display: "inline", marginRight: "8px" }}
                    />
                    Sort by
                  </label>
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="duration">Duration: Shortest</option>
                    <option value="rating">Rating: Highest</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="form-label">
                    <Briefcase
                      size={16}
                      style={{ display: "inline", marginRight: "8px" }}
                    />
                    Filter by Class
                  </label>
                  <select
                    className="form-select"
                    value={filterClass}
                    onChange={(e) => setFilterClass(e.target.value)}
                  >
                    <option value="all">All Classes</option>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
              </div>

              <div className="flights-grid">
                {filteredFlights.map((flight, index) => (
                  <div
                    key={flight.id}
                    className={`flight-card flight-card-wrapper glass animate-delay-${(index % 8) + 1}`}
                  >
                    <div className="flight-header">
                      <div className="flight-airline-info">
                        <div className="airline-logo">{flight.logo}</div>
                        <div className="flight-airline-details">
                          <h3>{flight.airline}</h3>
                          <p className="flight-code">
                            {flight.code} • {flight.class}
                          </p>
                        </div>
                      </div>
                      <div className="flight-rating">
                        <Star size={16} fill="#fbbf24" color="#fbbf24" />
                        <span className="flight-rating-text">
                          {flight.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flight-route">
                      <div className="flight-time-info">
                        <p className="flight-time">{flight.departure}</p>
                        <p className="flight-city">{flight.departureCity}</p>
                      </div>

                      <div className="flight-duration-info">
                        <div className="flight-duration-icon">
                          <div className="flight-duration-line"></div>
                          <Clock size={20} color="#a78bfa" />
                          <div className="flight-duration-line"></div>
                        </div>
                        <p className="flight-duration">{flight.duration}</p>
                        <p className="flight-stops">
                          {flight.stops === 0
                            ? "Direct"
                            : flight.stops === 1
                              ? "1 stop"
                              : `${flight.stops} stops`}
                        </p>
                      </div>

                      <div className="flight-time-info">
                        <p className="flight-time">{flight.arrival}</p>
                        <p className="flight-city">{flight.arrivalCity}</p>
                      </div>
                    </div>

                    <div className="flight-booking">
                      <div className="flight-price-info">
                        <p className="price-tag">${flight.price.toFixed(2)}</p>
                        <p className="flight-price-per">per passenger</p>
                      </div>
                      <button
                        onClick={() => handleFlightSelect(flight)}
                        className="btn-primary select-flight-button"
                      >
                        Select Flight
                      </button>
                    </div>

                    <div className="flight-features">
                      {flight.features.map((feature, idx) => (
                        <span key={idx} className="feature-badge">
                          ✓ {feature}
                        </span>
                      ))}
                      <span className="feature-badge">
                        Baggage: {flight.baggage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Passenger Details */}
        {step === 3 && selectedFlight && (
          <div className="passenger-container">
            <div className="glass-strong search-card">
              <button onClick={() => setStep(2)} className="back-button">
                ← Back to Flights
              </button>
              <h2 className="results-title heading-font">
                Passenger Details & Payment
              </h2>
            </div>

            <div className="glass-strong passenger-card">
              <div className="selected-flight-header">
                <div className="selected-flight-info">
                  <div
                    className="airline-logo"
                    style={{ width: "64px", height: "64px", fontSize: "24px" }}
                  >
                    {selectedFlight.logo}
                  </div>
                  <div className="selected-flight-details">
                    <h3>
                      {formData.from} → {formData.to}
                    </h3>
                    <p className="selected-flight-meta">
                      {selectedFlight.airline} - {selectedFlight.code} |{" "}
                      {selectedFlight.class}
                    </p>
                  </div>
                </div>
                <div className="selected-flight-price">
                  <p className="price-label">Price per passenger:</p>
                  <p className="price-tag" style={{ fontSize: "36px" }}>
                    ${selectedFlight.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flight-details-grid">
                <div className="detail-item">
                  <p className="detail-label">Departure</p>
                  <p className="detail-value">{selectedFlight.departure}</p>
                  <p className="detail-subvalue">
                    {selectedFlight.departureCity}
                  </p>
                </div>
                <div className="detail-item">
                  <p className="detail-label">Arrival</p>
                  <p className="detail-value">{selectedFlight.arrival}</p>
                  <p className="detail-subvalue">
                    {selectedFlight.arrivalCity}
                  </p>
                </div>
                <div className="detail-item">
                  <p className="detail-label">Duration</p>
                  <p className="detail-value">{selectedFlight.duration}</p>
                </div>
                <div className="detail-item">
                  <p className="detail-label">Baggage</p>
                  <p className="detail-value">{selectedFlight.baggage}</p>
                </div>
              </div>
            </div>

            <div className="glass-strong passenger-card">
              <h3 className="passenger-form-header heading-font">
                Passenger Information
              </h3>

              <div className="passenger-count-container">
                <p className="passenger-count-text">
                  Complete booking for {formData.passengers} passenger(s)
                </p>
                <button
                  className="btn-primary add-passenger-button"
                  onClick={handleAddPassenger}
                  type="button"
                >
                  + Add Passenger
                </button>
              </div>

              <div className="passenger-list">
                {passengerDetails.map((passenger, index) => (
                  <div
                    key={index}
                    className="passenger-item"
                    style={{ marginBottom: "16px" }}
                  >
                    <h4 className="passenger-item-title">
                      Passenger {index + 1}
                    </h4>
                    <div className="passenger-inputs-grid">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="passenger-input"
                        value={passenger.firstName}
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "firstName",
                            e.target.value,
                          )
                        }
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="passenger-input"
                        value={passenger.lastName}
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "lastName",
                            e.target.value,
                          )
                        }
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="passenger-input"
                        value={passenger.email}
                        onChange={(e) =>
                          handlePassengerChange(index, "email", e.target.value)
                        }
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="passenger-input"
                        value={passenger.phone}
                        onChange={(e) =>
                          handlePassengerChange(index, "phone", e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h3
                className="passenger-form-header heading-font"
                style={{ marginTop: "32px" }}
              >
                Payment Information
              </h3>

              <form onSubmit={handlePayment}>
                <div
                  className="passenger-inputs-grid"
                  style={{ marginBottom: "32px" }}
                >
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="passenger-input"
                    value={paymentDetails.cardNumber}
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        cardNumber: e.target.value,
                      })
                    }
                    maxLength="16"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="passenger-input"
                    value={paymentDetails.cardName}
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        cardName: e.target.value,
                      })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    className="passenger-input"
                    value={paymentDetails.expiryDate}
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        expiryDate: e.target.value,
                      })
                    }
                    maxLength="5"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="passenger-input"
                    value={paymentDetails.cvv}
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        cvv: e.target.value,
                      })
                    }
                    maxLength="3"
                    required
                  />
                </div>

                <div className="payment-summary">
                  <div className="total-amount-container">
                    <span className="total-label">Total Amount</span>
                    <span className="price-tag total-price">
                      ${(selectedFlight.price * formData.passengers).toFixed(2)}
                    </span>
                  </div>
                  <button type="submit" className="btn-primary payment-button">
                    Complete Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && selectedFlight && (
          <div className="passenger-container">
            <div className="glass-strong search-card confirmation-card">
              <div className="confirmation-icon">
                <div className="success-checkmark">✓</div>
              </div>
              <h2 className="confirmation-title heading-font gradient-text">
                Booking Confirmed!
              </h2>
              <p className="confirmation-subtitle">
                Your flight has been successfully booked
              </p>

              <div
                className="glass-strong passenger-card"
                style={{ marginTop: "32px" }}
              >
                <h3 className="passenger-form-header heading-font">
                  Booking Details
                </h3>

                <div className="confirmation-details">
                  <div className="confirmation-row">
                    <span className="confirmation-label">
                      Booking Reference:
                    </span>
                    <span className="confirmation-value">
                      {selectedFlight.code}-
                      {Math.random().toString(36).substr(2, 6).toUpperCase()}
                    </span>
                  </div>
                  <div className="confirmation-row">
                    <span className="confirmation-label">Airline:</span>
                    <span className="confirmation-value">
                      {selectedFlight.airline}
                    </span>
                  </div>
                  <div className="confirmation-row">
                    <span className="confirmation-label">Flight Number:</span>
                    <span className="confirmation-value">
                      {selectedFlight.code}
                    </span>
                  </div>
                  <div className="confirmation-row">
                    <span className="confirmation-label">Route:</span>
                    <span className="confirmation-value">
                      {formData.from} → {formData.to}
                    </span>
                  </div>
                  <div className="confirmation-row">
                    <span className="confirmation-label">Date:</span>
                    <span className="confirmation-value">{formData.date}</span>
                  </div>
                  <div className="confirmation-row">
                    <span className="confirmation-label">Departure:</span>
                    <span className="confirmation-value">
                      {selectedFlight.departure}
                    </span>
                  </div>
                  <div className="confirmation-row">
                    <span className="confirmation-label">Arrival:</span>
                    <span className="confirmation-value">
                      {selectedFlight.arrival}
                    </span>
                  </div>
                  <div className="confirmation-row">
                    <span className="confirmation-label">Passengers:</span>
                    <span className="confirmation-value">
                      {formData.passengers}
                    </span>
                  </div>
                  <div className="confirmation-row">
                    <span className="confirmation-label">Class:</span>
                    <span className="confirmation-value">
                      {selectedFlight.class}
                    </span>
                  </div>
                  <div
                    className="confirmation-row"
                    style={{
                      borderTop: "2px solid rgba(255, 255, 255, 0.2)",
                      paddingTop: "16px",
                      marginTop: "16px",
                    }}
                  >
                    <span
                      className="confirmation-label"
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      Total Paid:
                    </span>
                    <span className="price-tag" style={{ fontSize: "28px" }}>
                      ${(selectedFlight.price * formData.passengers).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "32px",
                    padding: "20px",
                    background: "rgba(139, 92, 246, 0.1)",
                    borderRadius: "16px",
                    border: "1px solid rgba(167, 139, 250, 0.3)",
                  }}
                >
                  <p
                    style={{
                      color: "#c4b5fd",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    📧 A confirmation email has been sent to your registered
                    email address
                  </p>
                </div>

                <button
                  className="btn-primary payment-button"
                  style={{ marginTop: "24px" }}
                  onClick={() => {
                    setStep(1);
                    setSelectedFlight(null);
                    setPassengerDetails([
                      { firstName: "", lastName: "", email: "", phone: "" },
                    ]);
                    setPaymentDetails({
                      cardNumber: "",
                      cardName: "",
                      expiryDate: "",
                      cvv: "",
                    });
                    setFormData({
                      from: "",
                      to: "",
                      date: "",
                      passengers: 1,
                      tripType: "one-way",
                      class: "economy",
                    });
                  }}
                >
                  Book Another Flight
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
