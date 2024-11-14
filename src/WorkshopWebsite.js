import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WorkshopWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Web Development Workshop 2024</h1>
          <p className="text-xl opacity-90">Learn modern web development techniques from industry experts</p>
        </div>
      </div>

      {/* Key Info Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <p>March 15, 2024</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <p>9:00 AM - 5:00 PM</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <p>Tech Hub Center</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <p>30 Spots Available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About the Workshop</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Join us for an intensive, hands-on workshop where you'll learn the latest
              web development technologies and best practices. Perfect for beginners
              and intermediate developers looking to level up their skills.
            </p>
          </CardContent>
        </Card>

        {/* Schedule Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Workshop Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Morning Session (9:00 - 12:00)</h3>
                <p className="text-gray-600">Fundamentals and Setup</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Lunch Break (12:00 - 1:00)</h3>
                <p className="text-gray-600">Networking and Refreshments</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Afternoon Session (1:00 - 5:00)</h3>
                <p className="text-gray-600">Advanced Topics and Project Work</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registration Section */}
        <Card>
          <CardHeader>
            <CardTitle>Register Now</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">
              Secure your spot for this exclusive workshop. Early bird pricing
              available until March 1st.
            </p>
            {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Register for Workshop
            </Button> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkshopWebsite;