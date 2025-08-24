// pages/air-ticket.tsx
import Image from "next/image";
import React from "react";

export default function AirTicketPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Top Image Section */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <Image
              src="/air-ticket.png" // place your uploaded image in /public folder
              alt="Air Ticket"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center p-6 bg-gray-200">
            <h1 className="text-3xl font-semibold mb-4">Air Ticket</h1>
            <Image
              src="/parbhuji-logo.png" // place your logo in /public folder
              alt="Parbhu Ji Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            <strong>Air Ticket Services at [Your Company Name]</strong>
          </p>
          <p>
            At [Your Company Name], we understand that travel planning can be complex
            and time-consuming, especially when it involves international travel...
          </p>

          <h2 className="text-xl font-semibold mt-4">Our Air Ticket Services:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Affordable Flight Options:</strong> We partner with leading airlines...
            </li>
            <li>
              <strong>Customized Flight Booking:</strong> Based on your specific requirements...
            </li>
            <li>
              <strong>Round-The-World Tickets:</strong> If you’re planning to visit multiple destinations...
            </li>
            <li>
              <strong>Group Bookings:</strong> Traveling with a group? We offer special group booking services...
            </li>
            <li>
              <strong>International and Domestic Flight Services:</strong> Whether you’re flying within the country or abroad...
            </li>
            <li>
              <strong>Multi-City and Flexible Date Options:</strong> Our services extend to multi-city flight bookings...
            </li>
            <li>
              <strong>24/7 Customer Support:</strong> We pride ourselves on providing excellent customer service...
            </li>
            <li>
              <strong>Ticket Changes and Cancellations:</strong> Plans change, and sometimes you need to modify or cancel your flight...
            </li>
            <li>
              <strong>Special Assistance Services:</strong> For travelers with specific needs...
            </li>
            <li>
              <strong>Visa and Travel Documentation Assistance:</strong> We not only help with booking your flight tickets...
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Why Choose Us for Air Ticket Services?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Expert Travel Consultants:</strong> Our experienced team is well-versed...</li>
            <li><strong>Time and Cost Savings:</strong> We save you both time and money...</li>
            <li><strong>Hassle-Free Experience:</strong> From booking your flight to assisting with changes...</li>
            <li><strong>Convenience:</strong> Our online and offline booking options make it easy...</li>
            <li><strong>Global Reach:</strong> Whether you’re traveling to the USA, Canada, Australia...</li>
          </ul>

          <p>
            At [Your Company Name], we aim to make your travel experience as smooth as possible...
          </p>
        </div>
      </div>
    </div>
  );
};