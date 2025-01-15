'use client';

import { Package } from '@/types/index';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface PackageCardProps {
  package: Package;
//   onSelect: (pkg: Package) => void;
 }

export function PackageCard({ package: pkg,  }: PackageCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
        <CardDescription className="mb-4">{pkg.description}</CardDescription>
        <div className="space-y-2">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-1">
          <p className="text-2xl font-bold justify-center ">₹{pkg.basePrice}</p>
          <p className="text-sm text-muted-foreground">per adult</p>
          <p className="text-sm text-muted-foreground">Children: ₹{pkg.childPrice}/child</p>
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => onSelect(pkg)}
        >
          Book Now
        </Button>
      </CardFooter> */}
    </Card>
  );
}
