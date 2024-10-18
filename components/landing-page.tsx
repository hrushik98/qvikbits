'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { BookmarkIcon, MailIcon, NewspaperIcon, ChevronRightIcon, StarIcon } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold">QvikBits</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
            </div>
            <Button variant="outline" size="sm">
              Add to Chrome
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            QvikBits – Save &amp; Summarize Your Daily Reads
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Automatically save and receive email summaries of articles you care about – news, tech, and more.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              Add to Chrome <ChevronRightIcon size={16} />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why QvikBits?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <BookmarkIcon className="w-12 h-12 mx-auto mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">Save Articles with One Click</h3>
              <p className="text-gray-600">Easily save articles from across the web to read later.</p>
            </div>
            <div className="text-center p-6">
              <NewspaperIcon className="w-12 h-12 mx-auto mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">Summarized for You</h3>
              <p className="text-gray-600">Get bite-sized summaries of saved articles, delivered straight to your inbox every night.</p>
            </div>
            <div className="text-center p-6">
              <MailIcon className="w-12 h-12 mx-auto mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">News, Tech, and More</h3>
              <p className="text-gray-600">QvikBits works with all types of content, from news to tech and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Install the Extension",
                description: "Add QvikBits to your browser with one click."
              },
              {
                title: "Save Articles",
                description: "Save any article you want to read later or get a summary of."
              },
              {
                title: "Get Summaries in Your Inbox",
                description: "Receive a nightly email with a summary of all your saved articles."
              }
            ].map((step, index) => (
              <div key={index} className="relative p-6">
                <div className="text-4xl font-bold text-gray-200 absolute top-0 left-0">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-8">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <StarIcon className="w-8 h-8 text-yellow-400 mb-4" />
              <p className="text-lg mb-4 italic">
                &quot;QvikBits has made it super easy to keep up with news and tech articles. I love the nightly summaries!&quot;
              </p>
              <p className="font-semibold">- Sarah Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">QvikBits</h3>
              <p>Save and summarize your daily reads with ease.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <Button size="lg" className="w-full">
                Add to Chrome
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}