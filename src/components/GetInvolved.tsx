import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Users, HandHeart, Calendar, DollarSign, Megaphone } from "lucide-react";
import { useState } from "react"; // 👈 Already there

// 👇 ADDED: Import nothing else, only use existing hooks

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Volunteer with Us",
      description: "Join our community of dedicated volunteers and make a direct impact through hands-on involvement in our programs.",
      action: "Sign Up to Volunteer",
      color: "bg-primary"
    },
    {
      icon: DollarSign,
      title: "Make a Donation",
      description: "Support our mission with a financial contribution that helps us expand our reach and deepen our impact.",
      action: "Donate Now",
      color: "bg-secondary"
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Participate in our workshops, rallies, and community events to learn more and connect with like-minded individuals.",
      action: "View Events",
      color: "bg-accent"
    },
    {
      icon: Megaphone,
      title: "Spread Awareness",
      description: "Help us reach more people by sharing our mission and programs through your social networks and communities.",
      action: "Share Our Story",
      color: "bg-primary"
    }
  ];

  const donationLevels = [
    {
      amount: "₹101",
      impact: "Provides educational materials for 5 women",
      popular: false
    },
    {
      amount: "₹501",
      impact: "Sponsors a complete workshop for 20 participants",
      popular: false
    },
    {
      amount: "₹1001",
      impact: "Funds environmental program for one community",
      popular: false
    },
    {
      amount: "₹5001",
      impact: "Supports comprehensive program development",
      popular: false
    }
  ];

  const [selectedDonationIndex, setSelectedDonationIndex] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  // 👇 ADDED: State for form submission loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 👇 ADDED: States for QR Modal
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrAmount, setQrAmount] = useState("");

  // 👇 ADDED: Function to initiate UPI Payment
  const initiatePayment = () => {
    // Remove ₹ symbol and any spaces
    let amount = customAmount.replace(/[₹,\s]/g, '').trim();

    // If no amount selected
    if (!amount || isNaN(Number(amount)) || parseFloat(amount) <= 0) {
      alert("Please enter or select a valid donation amount.");
      return;
    }

    // 👇 REPLACE WITH YOUR UPI ID
    const upiId = "kalasuryafoundation@okhdfcbank";
    const payeeName = "KalaSurya Foundation";
    const transactionNote = "Donation to Our Cause";

    const upiUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${encodeURIComponent(amount)}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;

    // 👇 Detect if user is on mobile
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Try to open UPI app
      window.location.href = upiUrl;

      // Fallback if app doesn't open
      setTimeout(() => {
        if (!document.hidden) {
          alert(`If no app opened, please pay manually:\n\nUPI ID: ${upiId}\nAmount: ₹${amount}\nNote: ${transactionNote}`);
        }
      }, 2500);
    } else {
      // 👉 Desktop: Show QR Code Modal
      setQrAmount(amount);
      setShowQRModal(true);
    }
  };

  return (
    <section id="get-involved" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to support our mission and become part of our community. 
            Choose the option that works best for you and start making a difference today.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="shadow-card transition-smooth hover:shadow-lg hover:-translate-y-2 text-center">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 ${opportunity.color} rounded-full flex items-center justify-center`}>
                  <opportunity.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {opportunity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {opportunity.description}
                </p>
                <Button variant="outline" className="w-full">
                  {opportunity.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Levels */}
          <Card className="shadow-card">
            {/* 👇 ONLY ADDED: Wrapper div with id="donation" — NO OTHER CHANGES */}
            <div id="donation">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Heart className="w-6 h-6 text-primary mr-2" />
                  Make a Donation
                </CardTitle>
                <p className="text-muted-foreground">
                  Your support helps us continue our vital work in communities. Choose an amount that works for you.
                </p>
              </CardHeader>
            </div>
            {/* 👆 ONLY ADDED: Wrapper div with id="donation" — NO OTHER CHANGES */}
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {donationLevels.map((level, index) => (
                  <Card 
                    key={index} 
                    className={`cursor-pointer transition-smooth hover:shadow-md ${
                      level.popular ? 'ring-2 ring-primary bg-primary/5' : ''
                    } ${selectedDonationIndex === index ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => {
                      setCustomAmount(level.amount);
                      setSelectedDonationIndex(index);
                    }}
                    data-donation-card
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-2">{level.amount}</div>
                      <div className="text-xs text-muted-foreground">{level.impact}</div>
                      {level.popular && (
                        <div className="text-xs font-semibold text-primary mt-1">Most Popular</div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-4">
                <Input 
                  id="custom-amount-input" 
                  placeholder="Enter custom amount" 
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
                {/* 👇 ONLY ADDED onClick and type="button" — NO OTHER CHANGES */}
                <Button 
                  className="w-full" 
                  size="lg"
                  type="button" 
                  onClick={initiatePayment}
                >
                  Donate Securely
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Application */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <HandHeart className="w-6 h-6 text-secondary mr-2" />
                Volunteer Application
              </CardTitle>
              <p className="text-muted-foreground">
                Join our team of dedicated volunteers and help us create meaningful change in communities.
              </p>
            </CardHeader>
            <CardContent>
              {/* 👇 ONLY ADDED onSubmit, name attributes, and type="submit" — NO DELETIONS */}
              <form 
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);

                  const formData = new FormData(e.target as HTMLFormElement);
                  const data = {
                    user_name: formData.get('user_name'),
                    user_email: formData.get('user_email'),
                    user_phone: formData.get('user_phone'),
                    user_interest: formData.get('user_interest'),
                  };

                  try {
                    const response = await fetch('https://kalasurya-backend.onrender.com/api/volunteer  ', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(data),
                    });

                    const result = await response.json();

                    if (response.ok) {
                      alert(result.message || 'Thank you! Your application has been sent successfully.');
                      (e.target as HTMLFormElement).reset();
                    } else {
                      alert(result.error || 'Failed to send application. Please try again.');
                    }
                  } catch (error) {
                    alert('Network error. Please check if backend is running.');
                    console.error('Error:', error);
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <Input name="user_name" placeholder="Full Name" />
                <Input name="user_email" type="email" placeholder="Email Address" />
                <Input name="user_phone" placeholder="Phone Number" />
                <Input name="user_interest" placeholder="Area of Interest" />
                <Button 
                  className="w-full" 
                  size="lg" 
                  variant="secondary" 
                  type="submit"
                  disabled={isSubmitting} // 👈 Optional: disable while submitting
                >
                  {isSubmitting ? 'Sending...' : 'Submit Application'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <Card className="shadow-card bg-gradient-card text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates on our programs, upcoming events, 
              and impact stories from the communities we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 👇 QR Code Modal for Desktop Users — ONLY ADDITION, NO REMOVALS */}
        {showQRModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Scan to Donate</h3>
              <p className="text-muted-foreground mb-4">
                Scan this QR code using any UPI app (Google Pay, PhonePe, Paytm)
              </p>
              <div className="bg-white p-4 rounded-md inline-block">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
                    `upi://pay?pa=${encodeURIComponent(
                      "kalasuryafoundation@okhdfcbank"
                    )}&pn=${encodeURIComponent(
                      "KalaSurya Foundation"
                    )}&am=${encodeURIComponent(qrAmount)}&cu=INR&tn=${encodeURIComponent(
                      "Donation to Our Cause"
                    )}`
                  )}`}
                  alt="UPI QR Code"
                  className="w-48 h-48 mx-auto"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Amount: <strong>₹{qrAmount}</strong>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                UPI ID: kalasuryafoundation@okhdfcbank
              </p>
              <Button
                onClick={() => setShowQRModal(false)}
                variant="outline"
                className="mt-6"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetInvolved;