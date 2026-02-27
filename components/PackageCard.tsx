'use client';

import { Package } from '@/types/index';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface PackageCardProps {
  package: Package;
  onSelect?: (pkg: Package) => void;
}

export function PackageCard({ package: pkg, onSelect }: PackageCardProps) {
  return (
    <div className="relative group">
      {/* Animated gradient border effect */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
      
      <Card className="relative flex flex-col h-full rounded-xl border border-gray-200 bg-white shadow-lg transform transition-transform duration-300 group-hover:scale-105">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <CardTitle className="text-2xl font-bold text-gray-800">{pkg.name}</CardTitle>
          <CardDescription className="mt-2 text-gray-600">{pkg.description}</CardDescription>
          <ul className="mt-4 space-y-2">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl font-bold text-gray-800">₹{pkg.basePrice}</p>
            <p className="text-sm text-gray-500">per adult</p>
            <p className="text-sm text-gray-500">Children: ₹{pkg.childPrice}/child</p>
          </div>
        </CardContent>
        {onSelect && (
          <CardFooter className="p-4">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 transition-colors" 
              onClick={() => onSelect(pkg)}
            >
              Book Now
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
